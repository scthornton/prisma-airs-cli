# Class: SdkRedTeamService

Defined in: [src/airs/redteam.ts:76](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L76)

Wraps the SDK's RedTeamClient to implement RedTeamService.
Provides scan creation, status polling, report retrieval, and target/category listing.

## Implements

- [`RedTeamService`](../interfaces/RedTeamService.md)

## Constructors

### Constructor

> **new SdkRedTeamService**(`opts?`): `SdkRedTeamService`

Defined in: [src/airs/redteam.ts:79](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L79)

#### Parameters

##### opts?

`RedTeamClientOptions`

#### Returns

`SdkRedTeamService`

## Methods

### abortScan()

> **abortScan**(`jobId`): `Promise`\<`void`\>

Defined in: [src/airs/redteam.ts:350](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L350)

Abort a running scan.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`abortScan`](../interfaces/RedTeamService.md#abortscan)

***

### acceptEula()

> **acceptEula**(`eulaContent`): `Promise`\<`EulaStatus`\>

Defined in: [src/airs/redteam.ts:97](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L97)

Accept the EULA.

#### Parameters

##### eulaContent

`string`

#### Returns

`Promise`\<`EulaStatus`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`acceptEula`](../interfaces/RedTeamService.md#accepteula)

***

### createDevices()

> **createDevices**(`tenantId`, `request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:159](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L159)

Create devices for an instance.

#### Parameters

##### tenantId

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`createDevices`](../interfaces/RedTeamService.md#createdevices)

***

### createInstance()

> **createInstance**(`request`): `Promise`\<`InstanceResponse`\>

Defined in: [src/airs/redteam.ts:109](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L109)

Create an instance.

#### Parameters

##### request

`InstanceRequest`

#### Returns

`Promise`\<`InstanceResponse`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`createInstance`](../interfaces/RedTeamService.md#createinstance)

***

### createScan()

> **createScan**(`request`): `Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)\>

Defined in: [src/airs/redteam.ts:293](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L293)

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

`Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`createScan`](../interfaces/RedTeamService.md#createscan)

***

### createTarget()

> **createTarget**(`request`, `opts?`): `Promise`\<[`RedTeamTargetDetail`](../interfaces/RedTeamTargetDetail.md)\>

Defined in: [src/airs/redteam.ts:254](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L254)

Create a red team target.

#### Parameters

##### request

[`RedTeamTargetCreateRequest`](../interfaces/RedTeamTargetCreateRequest.md)

##### opts?

[`TargetOperationOptions`](../interfaces/TargetOperationOptions.md)

#### Returns

`Promise`\<[`RedTeamTargetDetail`](../interfaces/RedTeamTargetDetail.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`createTarget`](../interfaces/RedTeamService.md#createtarget)

***

### deleteDevices()

> **deleteDevices**(`tenantId`, `serialNumbers`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:179](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L179)

Delete devices by serial numbers.

#### Parameters

##### tenantId

`string`

##### serialNumbers

`string`

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`deleteDevices`](../interfaces/RedTeamService.md#deletedevices)

***

### deleteInstance()

> **deleteInstance**(`tenantId`): `Promise`\<`InstanceResponse`\>

Defined in: [src/airs/redteam.ts:149](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L149)

Delete an instance.

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<`InstanceResponse`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`deleteInstance`](../interfaces/RedTeamService.md#deleteinstance)

***

### deleteTarget()

> **deleteTarget**(`uuid`): `Promise`\<`void`\>

Defined in: [src/airs/redteam.ts:271](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L271)

Delete a red team target.

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`deleteTarget`](../interfaces/RedTeamService.md#deletetarget)

***

### getCategories()

> **getCategories**(): `Promise`\<[`RedTeamCategory`](../interfaces/RedTeamCategory.md)[]\>

Defined in: [src/airs/redteam.ts:443](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L443)

List available attack categories.

#### Returns

`Promise`\<[`RedTeamCategory`](../interfaces/RedTeamCategory.md)[]\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getCategories`](../interfaces/RedTeamService.md#getcategories)

***

### getCustomReport()

> **getCustomReport**(`jobId`): `Promise`\<[`RedTeamCustomReport`](../interfaces/RedTeamCustomReport.md)\>

Defined in: [src/airs/redteam.ts:387](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L387)

Get custom attack report.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<[`RedTeamCustomReport`](../interfaces/RedTeamCustomReport.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getCustomReport`](../interfaces/RedTeamService.md#getcustomreport)

***

### getEulaContent()

> **getEulaContent**(): `Promise`\<`EulaContent`\>

Defined in: [src/airs/redteam.ts:83](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L83)

Get EULA content.

#### Returns

`Promise`\<`EulaContent`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getEulaContent`](../interfaces/RedTeamService.md#geteulacontent)

***

### getEulaStatus()

> **getEulaStatus**(): `Promise`\<`EulaStatus`\>

Defined in: [src/airs/redteam.ts:88](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L88)

Get EULA acceptance status.

#### Returns

`Promise`\<`EulaStatus`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getEulaStatus`](../interfaces/RedTeamService.md#geteulastatus)

***

### getInstance()

> **getInstance**(`tenantId`): `Promise`\<`InstanceDetail`\>

Defined in: [src/airs/redteam.ts:124](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L124)

Get instance details.

#### Parameters

##### tenantId

`string`

#### Returns

`Promise`\<`InstanceDetail`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getInstance`](../interfaces/RedTeamService.md#getinstance)

***

### getRegistryCredentials()

> **getRegistryCredentials**(): `Promise`\<`RegistryCredentials`\>

Defined in: [src/airs/redteam.ts:186](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L186)

Get or create registry credentials.

#### Returns

`Promise`\<`RegistryCredentials`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getRegistryCredentials`](../interfaces/RedTeamService.md#getregistrycredentials)

***

### getScan()

> **getScan**(`jobId`): `Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)\>

Defined in: [src/airs/redteam.ts:327](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L327)

Get scan status by job ID.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getScan`](../interfaces/RedTeamService.md#getscan)

***

### getStaticReport()

> **getStaticReport**(`jobId`): `Promise`\<[`RedTeamStaticReport`](../interfaces/RedTeamStaticReport.md)\>

Defined in: [src/airs/redteam.ts:354](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L354)

Get static scan report.

#### Parameters

##### jobId

`string`

#### Returns

`Promise`\<[`RedTeamStaticReport`](../interfaces/RedTeamStaticReport.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getStaticReport`](../interfaces/RedTeamService.md#getstaticreport)

***

### getTarget()

> **getTarget**(`uuid`): `Promise`\<[`RedTeamTargetDetail`](../interfaces/RedTeamTargetDetail.md)\>

Defined in: [src/airs/redteam.ts:249](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L249)

Get target details.

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<[`RedTeamTargetDetail`](../interfaces/RedTeamTargetDetail.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getTarget`](../interfaces/RedTeamService.md#gettarget)

***

### getTargetMetadata()

> **getTargetMetadata**(): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:213](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L213)

Get target field metadata.

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getTargetMetadata`](../interfaces/RedTeamService.md#gettargetmetadata)

***

### getTargetProfile()

> **getTargetProfile**(`uuid`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:280](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L280)

Get target profile.

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getTargetProfile`](../interfaces/RedTeamService.md#gettargetprofile)

***

### getTargetTemplates()

> **getTargetTemplates**(): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:217](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L217)

Get provider-specific target templates.

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`getTargetTemplates`](../interfaces/RedTeamService.md#gettargettemplates)

***

### listAttacks()

> **listAttacks**(`jobId`, `opts?`): `Promise`\<[`RedTeamAttack`](../interfaces/RedTeamAttack.md)[]\>

Defined in: [src/airs/redteam.ts:409](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L409)

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

`Promise`\<[`RedTeamAttack`](../interfaces/RedTeamAttack.md)[]\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`listAttacks`](../interfaces/RedTeamService.md#listattacks)

***

### listCustomAttacks()

> **listCustomAttacks**(`jobId`, `opts?`): `Promise`\<[`RedTeamCustomAttack`](../interfaces/RedTeamCustomAttack.md)[]\>

Defined in: [src/airs/redteam.ts:426](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L426)

List attacks from a custom prompt set scan.

#### Parameters

##### jobId

`string`

##### opts?

###### limit?

`number`

#### Returns

`Promise`\<[`RedTeamCustomAttack`](../interfaces/RedTeamCustomAttack.md)[]\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`listCustomAttacks`](../interfaces/RedTeamService.md#listcustomattacks)

***

### listScans()

> **listScans**(`opts?`): `Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)[]\>

Defined in: [src/airs/redteam.ts:332](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L332)

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

`Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)[]\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`listScans`](../interfaces/RedTeamService.md#listscans)

***

### listTargets()

> **listTargets**(): `Promise`\<[`RedTeamTarget`](../interfaces/RedTeamTarget.md)[]\>

Defined in: [src/airs/redteam.ts:221](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L221)

List configured red team targets.

#### Returns

`Promise`\<[`RedTeamTarget`](../interfaces/RedTeamTarget.md)[]\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`listTargets`](../interfaces/RedTeamService.md#listtargets)

***

### probeTarget()

> **probeTarget**(`request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:275](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L275)

Probe a target connection.

#### Parameters

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`probeTarget`](../interfaces/RedTeamService.md#probetarget)

***

### updateDevices()

> **updateDevices**(`tenantId`, `request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:169](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L169)

Update devices (PATCH).

#### Parameters

##### tenantId

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`updateDevices`](../interfaces/RedTeamService.md#updatedevices)

***

### updateInstance()

> **updateInstance**(`tenantId`, `request`): `Promise`\<`InstanceResponse`\>

Defined in: [src/airs/redteam.ts:134](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L134)

Update an instance.

#### Parameters

##### tenantId

`string`

##### request

`InstanceRequest`

#### Returns

`Promise`\<`InstanceResponse`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`updateInstance`](../interfaces/RedTeamService.md#updateinstance)

***

### updateTarget()

> **updateTarget**(`uuid`, `request`, `opts?`): `Promise`\<[`RedTeamTargetDetail`](../interfaces/RedTeamTargetDetail.md)\>

Defined in: [src/airs/redteam.ts:262](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L262)

Update a red team target.

#### Parameters

##### uuid

`string`

##### request

[`RedTeamTargetUpdateRequest`](../interfaces/RedTeamTargetUpdateRequest.md)

##### opts?

[`TargetOperationOptions`](../interfaces/TargetOperationOptions.md)

#### Returns

`Promise`\<[`RedTeamTargetDetail`](../interfaces/RedTeamTargetDetail.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`updateTarget`](../interfaces/RedTeamService.md#updatetarget)

***

### updateTargetProfile()

> **updateTargetProfile**(`uuid`, `request`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/airs/redteam.ts:285](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L285)

Update target profile.

#### Parameters

##### uuid

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`updateTargetProfile`](../interfaces/RedTeamService.md#updatetargetprofile)

***

### validateTargetAuth()

> **validateTargetAuth**(`request`): `Promise`\<`TargetAuthValidationResult`\>

Defined in: [src/airs/redteam.ts:194](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L194)

Validate target auth credentials.

#### Parameters

##### request

`TargetAuthValidationRequest`

#### Returns

`Promise`\<`TargetAuthValidationResult`\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`validateTargetAuth`](../interfaces/RedTeamService.md#validatetargetauth)

***

### waitForCompletion()

> **waitForCompletion**(`jobId`, `onProgress?`, `intervalMs?`): `Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)\>

Defined in: [src/airs/redteam.ts:457](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/redteam.ts#L457)

Poll until scan completes. Calls onProgress for status updates.

#### Parameters

##### jobId

`string`

##### onProgress?

(`job`) => `void`

##### intervalMs?

`number` = `5000`

#### Returns

`Promise`\<[`RedTeamJob`](../interfaces/RedTeamJob.md)\>

#### Implementation of

[`RedTeamService`](../interfaces/RedTeamService.md).[`waitForCompletion`](../interfaces/RedTeamService.md#waitforcompletion)
