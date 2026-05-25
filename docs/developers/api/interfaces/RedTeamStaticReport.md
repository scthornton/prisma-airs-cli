# Interface: RedTeamStaticReport

Defined in: [src/airs/types.ts:265](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/types.ts#L265)

Normalized static report summary.

## Properties

### asr?

> `optional` **asr?**: `number` \| `null`

Defined in: [src/airs/types.ts:267](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/types.ts#L267)

***

### categories

> **categories**: `object`[]

Defined in: [src/airs/types.ts:274](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/types.ts#L274)

#### asr

> **asr**: `number`

#### displayName

> **displayName**: `string`

#### failed

> **failed**: `number`

#### id

> **id**: `string`

#### successful

> **successful**: `number`

#### total

> **total**: `number`

***

### reportSummary?

> `optional` **reportSummary?**: `string` \| `null`

Defined in: [src/airs/types.ts:273](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/types.ts#L273)

***

### score?

> `optional` **score?**: `number` \| `null`

Defined in: [src/airs/types.ts:266](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/types.ts#L266)

***

### severityBreakdown

> **severityBreakdown**: `object`[]

Defined in: [src/airs/types.ts:268](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/types.ts#L268)

#### failed

> **failed**: `number`

#### severity

> **severity**: `string`

#### successful

> **successful**: `number`
