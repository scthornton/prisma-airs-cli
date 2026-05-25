# Interface: ModelSecurityService

Defined in: [src/airs/types.ts:704](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L704)

Contract for Model Security operations.

## Methods

### addLabels()

> **addLabels**(`scanUuid`, `labels`): `Promise`\<`void`\>

Defined in: [src/airs/types.ts:752](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L752)

#### Parameters

##### scanUuid

`string`

##### labels

[`ModelSecurityLabel`](ModelSecurityLabel.md)[]

#### Returns

`Promise`\<`void`\>

***

### createGroup()

> **createGroup**(`request`): `Promise`\<[`ModelSecurityGroup`](ModelSecurityGroup.md)\>

Defined in: [src/airs/types.ts:709](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L709)

#### Parameters

##### request

[`ModelSecurityGroupCreateRequest`](ModelSecurityGroupCreateRequest.md)

#### Returns

`Promise`\<[`ModelSecurityGroup`](ModelSecurityGroup.md)\>

***

### createScan()

> **createScan**(`request`): `Promise`\<[`ModelSecurityScan`](ModelSecurityScan.md)\>

Defined in: [src/airs/types.ts:729](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L729)

#### Parameters

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<[`ModelSecurityScan`](ModelSecurityScan.md)\>

***

### deleteGroup()

> **deleteGroup**(`uuid`): `Promise`\<`void`\>

Defined in: [src/airs/types.ts:711](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L711)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteLabels()

> **deleteLabels**(`scanUuid`, `keys`): `Promise`\<`void`\>

Defined in: [src/airs/types.ts:754](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L754)

#### Parameters

##### scanUuid

`string`

##### keys

`string`[]

#### Returns

`Promise`\<`void`\>

***

### getEvaluation()

> **getEvaluation**(`uuid`): `Promise`\<[`ModelSecurityEvaluation`](ModelSecurityEvaluation.md)\>

Defined in: [src/airs/types.ts:739](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L739)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`ModelSecurityEvaluation`](ModelSecurityEvaluation.md)\>

***

### getEvaluations()

> **getEvaluations**(`scanUuid`, `opts?`): `Promise`\<\{ `evaluations`: [`ModelSecurityEvaluation`](ModelSecurityEvaluation.md)[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:735](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L735)

#### Parameters

##### scanUuid

`string`

##### opts?

###### limit?

`number`

###### skip?

`number`

#### Returns

`Promise`\<\{ `evaluations`: [`ModelSecurityEvaluation`](ModelSecurityEvaluation.md)[]; `totalItems`: `number`; \}\>

***

### getFiles()

> **getFiles**(`scanUuid`, `opts?`): `Promise`\<\{ `files`: [`ModelSecurityFile`](ModelSecurityFile.md)[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:747](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L747)

#### Parameters

##### scanUuid

`string`

##### opts?

[`ModelSecurityFileListOptions`](ModelSecurityFileListOptions.md)

#### Returns

`Promise`\<\{ `files`: [`ModelSecurityFile`](ModelSecurityFile.md)[]; `totalItems`: `number`; \}\>

***

### getGroup()

> **getGroup**(`uuid`): `Promise`\<[`ModelSecurityGroup`](ModelSecurityGroup.md)\>

Defined in: [src/airs/types.ts:708](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L708)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`ModelSecurityGroup`](ModelSecurityGroup.md)\>

***

### getLabelKeys()

> **getLabelKeys**(`opts?`): `Promise`\<\{ `keys`: `string`[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:755](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L755)

#### Parameters

##### opts?

###### limit?

`number`

###### skip?

`number`

#### Returns

`Promise`\<\{ `keys`: `string`[]; `totalItems`: `number`; \}\>

***

### getLabelValues()

> **getLabelValues**(`key`, `opts?`): `Promise`\<\{ `totalItems`: `number`; `values`: `string`[]; \}\>

Defined in: [src/airs/types.ts:759](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L759)

#### Parameters

##### key

`string`

##### opts?

###### limit?

`number`

###### skip?

`number`

#### Returns

`Promise`\<\{ `totalItems`: `number`; `values`: `string`[]; \}\>

***

### getPyPIAuth()

> **getPyPIAuth**(): `Promise`\<[`ModelSecurityPyPIAuth`](ModelSecurityPyPIAuth.md)\>

Defined in: [src/airs/types.ts:764](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L764)

#### Returns

`Promise`\<[`ModelSecurityPyPIAuth`](ModelSecurityPyPIAuth.md)\>

***

### getRule()

> **getRule**(`uuid`): `Promise`\<[`ModelSecurityRule`](ModelSecurityRule.md)\>

Defined in: [src/airs/types.ts:727](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L727)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`ModelSecurityRule`](ModelSecurityRule.md)\>

***

### getRuleInstance()

> **getRuleInstance**(`groupUuid`, `instanceUuid`): `Promise`\<[`ModelSecurityRuleInstance`](ModelSecurityRuleInstance.md)\>

Defined in: [src/airs/types.ts:717](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L717)

#### Parameters

##### groupUuid

`string`

##### instanceUuid

`string`

#### Returns

`Promise`\<[`ModelSecurityRuleInstance`](ModelSecurityRuleInstance.md)\>

***

### getScan()

> **getScan**(`uuid`): `Promise`\<[`ModelSecurityScan`](ModelSecurityScan.md)\>

Defined in: [src/airs/types.ts:733](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L733)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`ModelSecurityScan`](ModelSecurityScan.md)\>

***

### getViolation()

> **getViolation**(`uuid`): `Promise`\<[`ModelSecurityViolation`](ModelSecurityViolation.md)\>

Defined in: [src/airs/types.ts:745](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L745)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`ModelSecurityViolation`](ModelSecurityViolation.md)\>

***

### getViolations()

> **getViolations**(`scanUuid`, `opts?`): `Promise`\<\{ `totalItems`: `number`; `violations`: [`ModelSecurityViolation`](ModelSecurityViolation.md)[]; \}\>

Defined in: [src/airs/types.ts:741](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L741)

#### Parameters

##### scanUuid

`string`

##### opts?

###### limit?

`number`

###### skip?

`number`

#### Returns

`Promise`\<\{ `totalItems`: `number`; `violations`: [`ModelSecurityViolation`](ModelSecurityViolation.md)[]; \}\>

***

### listGroups()

> **listGroups**(`opts?`): `Promise`\<\{ `groups`: [`ModelSecurityGroup`](ModelSecurityGroup.md)[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:705](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L705)

#### Parameters

##### opts?

[`ModelSecurityGroupListOptions`](ModelSecurityGroupListOptions.md)

#### Returns

`Promise`\<\{ `groups`: [`ModelSecurityGroup`](ModelSecurityGroup.md)[]; `totalItems`: `number`; \}\>

***

### listRuleInstances()

> **listRuleInstances**(`groupUuid`, `opts?`): `Promise`\<\{ `ruleInstances`: [`ModelSecurityRuleInstance`](ModelSecurityRuleInstance.md)[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:713](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L713)

#### Parameters

##### groupUuid

`string`

##### opts?

[`ModelSecurityRuleInstanceListOptions`](ModelSecurityRuleInstanceListOptions.md)

#### Returns

`Promise`\<\{ `ruleInstances`: [`ModelSecurityRuleInstance`](ModelSecurityRuleInstance.md)[]; `totalItems`: `number`; \}\>

***

### listRules()

> **listRules**(`opts?`): `Promise`\<\{ `rules`: [`ModelSecurityRule`](ModelSecurityRule.md)[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:724](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L724)

#### Parameters

##### opts?

[`ModelSecurityRuleListOptions`](ModelSecurityRuleListOptions.md)

#### Returns

`Promise`\<\{ `rules`: [`ModelSecurityRule`](ModelSecurityRule.md)[]; `totalItems`: `number`; \}\>

***

### listScans()

> **listScans**(`opts?`): `Promise`\<\{ `scans`: [`ModelSecurityScan`](ModelSecurityScan.md)[]; `totalItems`: `number`; \}\>

Defined in: [src/airs/types.ts:730](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L730)

#### Parameters

##### opts?

[`ModelSecurityScanListOptions`](ModelSecurityScanListOptions.md)

#### Returns

`Promise`\<\{ `scans`: [`ModelSecurityScan`](ModelSecurityScan.md)[]; `totalItems`: `number`; \}\>

***

### setLabels()

> **setLabels**(`scanUuid`, `labels`): `Promise`\<`void`\>

Defined in: [src/airs/types.ts:753](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L753)

#### Parameters

##### scanUuid

`string`

##### labels

[`ModelSecurityLabel`](ModelSecurityLabel.md)[]

#### Returns

`Promise`\<`void`\>

***

### updateGroup()

> **updateGroup**(`uuid`, `request`): `Promise`\<[`ModelSecurityGroup`](ModelSecurityGroup.md)\>

Defined in: [src/airs/types.ts:710](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L710)

#### Parameters

##### uuid

`string`

##### request

[`ModelSecurityGroupUpdateRequest`](ModelSecurityGroupUpdateRequest.md)

#### Returns

`Promise`\<[`ModelSecurityGroup`](ModelSecurityGroup.md)\>

***

### updateRuleInstance()

> **updateRuleInstance**(`groupUuid`, `instanceUuid`, `request`): `Promise`\<[`ModelSecurityRuleInstance`](ModelSecurityRuleInstance.md)\>

Defined in: [src/airs/types.ts:718](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L718)

#### Parameters

##### groupUuid

`string`

##### instanceUuid

`string`

##### request

[`ModelSecurityRuleInstanceUpdateRequest`](ModelSecurityRuleInstanceUpdateRequest.md)

#### Returns

`Promise`\<[`ModelSecurityRuleInstance`](ModelSecurityRuleInstance.md)\>
