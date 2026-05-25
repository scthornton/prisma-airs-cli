export interface OptionInfo {
  flags: string;
  description: string;
  required: boolean;
  defaultValue?: string;
}

export interface ArgInfo {
  name: string;
  required: boolean;
  variadic: boolean;
  description: string;
}

export interface CommandNode {
  path: string; // space-joined path without binary name, e.g. "runtime scan"
  name: string;
  description: string;
  usage: string; // "airs runtime scan [options] <prompt>"
  args: ArgInfo[];
  options: OptionInfo[];
  subcommands: CommandNode[];
  isLeaf: boolean;
}

export interface PageNode {
  slug: string; // path with '/' separators, e.g. "runtime/scan" or "runtime/dlp/patterns"
  title: string; // e.g. "runtime scan"
  groupPath: string; // command path of the page node
  commands: CommandNode[]; // leaf commands documented on this page
}

export interface CommandExample {
  input: string;
  output?: string;
  note?: string;
}

export type ExampleMap = Record<string, CommandExample[]>; // key = command path
