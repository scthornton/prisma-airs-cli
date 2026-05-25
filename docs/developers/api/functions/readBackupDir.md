# Function: readBackupDir()

> **readBackupDir**\<`T`\>(`dirPath`, `resourceType`): [`BackupEnvelope`](../interfaces/BackupEnvelope.md)\<`T`\>[]

Defined in: [src/backup/io.ts:58](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/backup/io.ts#L58)

Read all backup files from a directory, filtering by resourceType.

## Type Parameters

### T

`T`

## Parameters

### dirPath

`string`

### resourceType

`"redteam-target"`

## Returns

[`BackupEnvelope`](../interfaces/BackupEnvelope.md)\<`T`\>[]
