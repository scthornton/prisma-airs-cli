import type { Command } from 'commander';
import type { ArgInfo, CommandNode, OptionInfo, PageNode } from './model.js';

function optionInfo(opt: {
  flags: string;
  description?: string;
  mandatory?: boolean;
  defaultValue?: unknown;
}): OptionInfo {
  return {
    flags: opt.flags,
    description: opt.description ?? '',
    required: Boolean(opt.mandatory),
    defaultValue: opt.defaultValue === undefined ? undefined : String(opt.defaultValue),
  };
}

function argInfo(arg: {
  name(): string;
  required: boolean;
  variadic: boolean;
  description?: string;
}): ArgInfo {
  return {
    name: arg.name(),
    required: Boolean(arg.required),
    variadic: Boolean(arg.variadic),
    description: arg.description ?? '',
  };
}

function toNode(cmd: Command, parentPath: string): CommandNode {
  const name = cmd.name();
  const path = parentPath ? `${parentPath} ${name}` : name;
  const subcommands = (cmd.commands as Command[])
    .filter((c) => c.name() !== 'help')
    .map((c) => toNode(c, path));
  return {
    path,
    name,
    description: cmd.description() ?? '',
    usage: `airs ${path} ${cmd.usage()}`.trim(),
    args: (cmd.registeredArguments as Parameters<typeof argInfo>[0][]).map(argInfo),
    options: (cmd.options as Parameters<typeof optionInfo>[0][]).map(optionInfo),
    subcommands,
    isLeaf: subcommands.length === 0,
  };
}

export function walkProgram(program: Command): CommandNode[] {
  return (program.commands as Command[])
    .filter((c) => c.name() !== 'help')
    .map((c) => toNode(c, ''));
}

export function leafCommands(nodes: CommandNode[]): CommandNode[] {
  const out: CommandNode[] = [];
  const visit = (n: CommandNode) => {
    if (n.isLeaf) out.push(n);
    else n.subcommands.forEach(visit);
  };
  nodes.forEach(visit);
  return out;
}

export function collectPages(nodes: CommandNode[]): PageNode[] {
  const pages: PageNode[] = [];
  const page = (n: CommandNode, commands: CommandNode[]): PageNode => ({
    slug: n.path.replace(/ /g, '/'),
    title: n.path,
    groupPath: n.path,
    commands,
  });
  const visit = (n: CommandNode) => {
    if (n.isLeaf) {
      pages.push(page(n, [n]));
    } else if (n.subcommands.every((c) => c.isLeaf)) {
      pages.push(page(n, n.subcommands));
    } else {
      n.subcommands.forEach(visit);
    }
  };
  nodes.forEach(visit);
  return pages;
}
