# Interface: RestoreResult

Defined in: [src/backup/types.ts:24](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/backup/types.ts#L24)

Per-target result reported after a restore run.

## Properties

### action

> **action**: `"failed"` \| `"created"` \| `"updated"` \| `"skipped"`

Defined in: [src/backup/types.ts:26](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/backup/types.ts#L26)

***

### error?

> `optional` **error?**: `string`

Defined in: [src/backup/types.ts:27](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/backup/types.ts#L27)

***

### name

> **name**: `string`

Defined in: [src/backup/types.ts:25](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/backup/types.ts#L25)
