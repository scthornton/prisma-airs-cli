# Interface: RedTeamService

Defined in: [src/airs/types.ts:391](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L391)

Contract for AI Red Team scan operations.

## Methods

### abortScan()

> **abortScan**(`jobId`): `Promise`\<`void`\>

Defined in: [src/airs/types.ts:487](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L487)

Abort a running scan.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<`void`\>

***

### acceptEula()

> **acceptEula**(`eulaContent`): `Promise`\<`EulaStatus`\>

Defined in: [src/airs/types.ts:397](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L397)

Accept the EULA.

#### Parameters

##### eulaContent

`string`

#### Returns

`Promise`\<`EulaStatus`\>

***

### createDevices()

> **createDevices**(`tenantId`, `request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:408](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L408)

Create devices for an instance.

#### Parameters

##### tenantId

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### createInstance()

> **createInstance**(`request`): `Promise`\<`InstanceResponse`\>

Defined in: [src/airs/types.ts:400](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L400)

Create an instance.

#### Parameters

##### request

`InstanceRequest`

#### Returns

`Promise`\<`InstanceResponse`\>

***

### createScan()

> **createScan**(`request`): `Promise`\<[`RedTeamJob`](RedTeamJob.md)\>

Defined in: [src/airs/types.ts:464](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L464)

Create a red team scan job.

#### Parameters

##### request

###### attackGoals?

`string`[]

###### categories?

`Record`\<`string`, `unknown`\>

###### customPromptSets?

`string`[]

###### jobType

`string`

###### name

`string`

###### streamBreadth?

`number`

###### streamDepth?

`number`

###### targetUuid

`string`

#### Returns

`Promise`\<[`RedTeamJob`](RedTeamJob.md)\>

***

### createTarget()

> **createTarget**(`request`, `opts?`): `Promise`\<[`RedTeamTargetDetail`](RedTeamTargetDetail.md)\>

Defined in: [src/airs/types.ts:436](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L436)

Create a red team target.

#### Parameters

##### request

[`RedTeamTargetCreateRequest`](RedTeamTargetCreateRequest.md)

##### opts?

[`TargetOperationOptions`](TargetOperationOptions.md)

#### Returns

`Promise`\<[`RedTeamTargetDetail`](RedTeamTargetDetail.md)\>

***

### deleteDevices()

> **deleteDevices**(`tenantId`, `serialNumbers`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:418](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L418)

Delete devices by serial numbers.

#### Parameters

##### tenantId

`string`

##### serialNumbers

`string`

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### deleteInstance()

> **deleteInstance**(`tenantId`): `Promise`\<`InstanceResponse`\>

Defined in: [src/airs/types.ts:406](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L406)

Delete an instance.

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<`InstanceResponse`\>

***

### deleteTarget()

> **deleteTarget**(`uuid`): `Promise`\<`void`\>

Defined in: [src/airs/types.ts:449](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L449)

Delete a red team target.

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`void`\>

***

### getCategories()

> **getCategories**(): `Promise`\<[`RedTeamCategory`](RedTeamCategory.md)[]\>

Defined in: [src/airs/types.ts:505](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L505)

List available attack categories.

#### Returns

`Promise`\<[`RedTeamCategory`](RedTeamCategory.md)[]\>

***

### getCustomReport()

> **getCustomReport**(`jobId`): `Promise`\<[`RedTeamCustomReport`](RedTeamCustomReport.md)\>

Defined in: [src/airs/types.ts:493](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L493)

Get custom attack report.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<[`RedTeamCustomReport`](RedTeamCustomReport.md)\>

***

### getEulaContent()

> **getEulaContent**(): `Promise`\<`EulaContent`\>

Defined in: [src/airs/types.ts:393](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L393)

Get EULA content.

#### Returns

`Promise`\<`EulaContent`\>

***

### getEulaStatus()

> **getEulaStatus**(): `Promise`\<`EulaStatus`\>

Defined in: [src/airs/types.ts:395](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L395)

Get EULA acceptance status.

#### Returns

`Promise`\<`EulaStatus`\>

***

### getInstance()

> **getInstance**(`tenantId`): `Promise`\<`InstanceDetail`\>

Defined in: [src/airs/types.ts:402](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L402)

Get instance details.

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<`InstanceDetail`\>

***

### getRegistryCredentials()

> **getRegistryCredentials**(): `Promise`\<`RegistryCredentials`\>

Defined in: [src/airs/types.ts:420](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L420)

Get or create registry credentials.

#### Returns

`Promise`\<`RegistryCredentials`\>

***

### getScan()

> **getScan**(`jobId`): `Promise`\<[`RedTeamJob`](RedTeamJob.md)\>

Defined in: [src/airs/types.ts:476](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L476)

Get scan status by job ID.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<[`RedTeamJob`](RedTeamJob.md)\>

***

### getStaticReport()

> **getStaticReport**(`jobId`): `Promise`\<[`RedTeamStaticReport`](RedTeamStaticReport.md)\>

Defined in: [src/airs/types.ts:490](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L490)

Get static scan report.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<[`RedTeamStaticReport`](RedTeamStaticReport.md)\>

***

### getTarget()

> **getTarget**(`uuid`): `Promise`\<[`RedTeamTargetDetail`](RedTeamTargetDetail.md)\>

Defined in: [src/airs/types.ts:433](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L433)

Get target details.

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`RedTeamTargetDetail`](RedTeamTargetDetail.md)\>

***

### getTargetMetadata()

> **getTargetMetadata**(): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:425](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L425)

Get target field metadata.

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### getTargetProfile()

> **getTargetProfile**(`uuid`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:455](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L455)

Get target profile.

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### getTargetTemplates()

> **getTargetTemplates**(): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:427](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L427)

Get provider-specific target templates.

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### listAttacks()

> **listAttacks**(`jobId`, `opts?`): `Promise`\<[`RedTeamAttack`](RedTeamAttack.md)[]\>

Defined in: [src/airs/types.ts:496](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L496)

List attacks from a static/dynamic scan.

#### Parameters

##### jobId

`string`

##### opts?

###### limit?

`number`

###### severity?

`string`

#### Returns

`Promise`\<[`RedTeamAttack`](RedTeamAttack.md)[]\>

***

### listCustomAttacks()

> **listCustomAttacks**(`jobId`, `opts?`): `Promise`\<[`RedTeamCustomAttack`](RedTeamCustomAttack.md)[]\>

Defined in: [src/airs/types.ts:502](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L502)

List attacks from a custom prompt set scan.

#### Parameters

##### jobId

`string`

##### opts?

###### limit?

`number`

#### Returns

`Promise`\<[`RedTeamCustomAttack`](RedTeamCustomAttack.md)[]\>

***

### listScans()

> **listScans**(`opts?`): `Promise`\<[`RedTeamJob`](RedTeamJob.md)[]\>

Defined in: [src/airs/types.ts:479](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L479)

List recent scans with optional filters.

#### Parameters

##### opts?

###### jobType?

`string`

###### limit?

`number`

###### status?

`string`

###### targetId?

`string`

#### Returns

`Promise`\<[`RedTeamJob`](RedTeamJob.md)[]\>

***

### listTargets()

> **listTargets**(): `Promise`\<[`RedTeamTarget`](RedTeamTarget.md)[]\>

Defined in: [src/airs/types.ts:430](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L430)

List configured red team targets.

#### Returns

`Promise`\<[`RedTeamTarget`](RedTeamTarget.md)[]\>

***

### probeTarget()

> **probeTarget**(`request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:452](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L452)

Probe a target connection.

#### Parameters

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### updateDevices()

> **updateDevices**(`tenantId`, `request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:413](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L413)

Update devices (PATCH).

#### Parameters

##### tenantId

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### updateInstance()

> **updateInstance**(`tenantId`, `request`): `Promise`\<`InstanceResponse`\>

Defined in: [src/airs/types.ts:404](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L404)

Update an instance.

#### Parameters

##### tenantId

`string`

##### request

`InstanceRequest`

#### Returns

`Promise`\<`InstanceResponse`\>

***

### updateTarget()

> **updateTarget**(`uuid`, `request`, `opts?`): `Promise`\<[`RedTeamTargetDetail`](RedTeamTargetDetail.md)\>

Defined in: [src/airs/types.ts:442](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L442)

Update a red team target.

#### Parameters

##### uuid

`string`

##### request

[`RedTeamTargetUpdateRequest`](RedTeamTargetUpdateRequest.md)

##### opts?

[`TargetOperationOptions`](TargetOperationOptions.md)

#### Returns

`Promise`\<[`RedTeamTargetDetail`](RedTeamTargetDetail.md)\>

***

### updateTargetProfile()

> **updateTargetProfile**(`uuid`, `request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/types.ts:458](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L458)

Update target profile.

#### Parameters

##### uuid

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

***

### validateTargetAuth()

> **validateTargetAuth**(`request`): `Promise`\<`TargetAuthValidationResult`\>

Defined in: [src/airs/types.ts:423](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L423)

Validate target auth credentials.

#### Parameters

##### request

`TargetAuthValidationRequest`

#### Returns

`Promise`\<`TargetAuthValidationResult`\>

***

### waitForCompletion()

> **waitForCompletion**(`jobId`, `onProgress?`, `intervalMs?`): `Promise`\<[`RedTeamJob`](RedTeamJob.md)\>

Defined in: [src/airs/types.ts:508](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/types.ts#L508)

Poll until scan completes. Calls onProgress for status updates.

#### Parameters

##### jobId

`string`

##### onProgress?

(`job`) => `void`

##### intervalMs?

`number`

#### Returns

`Promise`\<[`RedTeamJob`](RedTeamJob.md)\>
