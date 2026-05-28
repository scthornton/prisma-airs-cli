# Class: SdkManagementService

Defined in: [src/airs/management.ts:30](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L30)

Wraps the SDK's ManagementClient to implement our ManagementService interface.
OAuth2 token management, caching, and retry are handled by the SDK.

## Implements

- `ManagementService`

## Constructors

### Constructor

> **new SdkManagementService**(`opts?`): `SdkManagementService`

Defined in: [src/airs/management.ts:33](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L33)

#### Parameters

##### opts?

`ManagementClientOptions`

#### Returns

`SdkManagementService`

## Methods

### assignTopicsToProfile()

> **assignTopicsToProfile**(`profileName`, `topics`, `guardrailAction?`): `Promise`\<`void`\>

Defined in: [src/airs/management.ts:95](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L95)

Sets one or more custom topics on a profile's topic-guardrails config.
Replaces any existing topics — previous runs' stale topics are cleared.
Groups topics by action; skips empty action groups (AIRS rejects them).

CRITICAL: Each topic entry MUST include the current `revision` number.
AIRS pins topic content to the revision specified in the profile — omitting
it defaults to revision 0 (original content), not the latest.

#### Parameters

##### profileName

`string`

##### topics

`object`[]

##### guardrailAction?

`"allow"` \| `"block"`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`ManagementService.assignTopicsToProfile`

***

### assignTopicToProfile()

> **assignTopicToProfile**(`profileName`, `topicId`, `topicName`, `action`): `Promise`\<`void`\>

Defined in: [src/airs/management.ts:77](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L77)

Sets a single custom topic on a profile's topic-guardrails config.
Delegates to [assignTopicsToProfile](#assigntopicstoprofile) for backward compatibility.

#### Parameters

##### profileName

`string`

##### topicId

`string`

##### topicName

`string`

##### action

`"allow"` \| `"block"`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`ManagementService.assignTopicToProfile`

***

### createApiKey()

> **createApiKey**(`request`): `Promise`\<`ApiKeyInfo`\>

Defined in: [src/airs/management.ts:315](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L315)

#### Parameters

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`ApiKeyInfo`\>

#### Implementation of

`ManagementService.createApiKey`

***

### createProfile()

> **createProfile**(`request`): `Promise`\<`SecurityProfileInfo`\>

Defined in: [src/airs/management.ts:267](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L267)

Create a security profile.

#### Parameters

##### request

`CreateSecurityProfileRequest`

#### Returns

`Promise`\<`SecurityProfileInfo`\>

#### Implementation of

`ManagementService.createProfile`

***

### createTopic()

> **createTopic**(`request`): `Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

Defined in: [src/airs/management.ts:37](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L37)

Create a new custom topic.

#### Parameters

##### request

`objectOutputType`

#### Returns

`Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

#### Implementation of

`ManagementService.createTopic`

***

### deleteApiKey()

> **deleteApiKey**(`apiKeyName`, `updatedBy`): `Promise`\<`DeleteResponse`\>

Defined in: [src/airs/management.ts:325](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L325)

#### Parameters

##### apiKeyName

`string`

##### updatedBy

`string`

#### Returns

`Promise`\<`DeleteResponse`\>

#### Implementation of

`ManagementService.deleteApiKey`

***

### deleteCustomerApp()

> **deleteCustomerApp**(`appName`, `updatedBy`): `Promise`\<`CustomerAppInfo`\>

Defined in: [src/airs/management.ts:366](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L366)

#### Parameters

##### appName

`string`

##### updatedBy

`string`

#### Returns

`Promise`\<`CustomerAppInfo`\>

#### Implementation of

`ManagementService.deleteCustomerApp`

***

### deleteProfile()

> **deleteProfile**(`profileId`): `Promise`\<`DeleteResponse`\>

Defined in: [src/airs/management.ts:280](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L280)

Delete a security profile.

#### Parameters

##### profileId

`string`

#### Returns

`Promise`\<`DeleteResponse`\>

#### Implementation of

`ManagementService.deleteProfile`

***

### deleteTopic()

> **deleteTopic**(`topicId`): `Promise`\<`void`\>

Defined in: [src/airs/management.ts:45](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L45)

Delete a custom topic by ID.

#### Parameters

##### topicId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

`ManagementService.deleteTopic`

***

### forceDeleteProfile()

> **forceDeleteProfile**(`profileId`, `updatedBy`): `Promise`\<`DeleteResponse`\>

Defined in: [src/airs/management.ts:285](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L285)

Force-delete a security profile (removes from referencing policies).

#### Parameters

##### profileId

`string`

##### updatedBy

`string`

#### Returns

`Promise`\<`DeleteResponse`\>

#### Implementation of

`ManagementService.forceDeleteProfile`

***

### forceDeleteTopic()

> **forceDeleteTopic**(`topicId`, `updatedBy?`): `Promise`\<`DeleteResponse`\>

Defined in: [src/airs/management.ts:49](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L49)

Force-delete a custom topic (removes from all referencing profiles).

#### Parameters

##### topicId

`string`

##### updatedBy?

`string`

#### Returns

`Promise`\<`DeleteResponse`\>

#### Implementation of

`ManagementService.forceDeleteTopic`

***

### getCustomerApp()

> **getCustomerApp**(`appName`): `Promise`\<`CustomerAppInfo`\>

Defined in: [src/airs/management.ts:353](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L353)

#### Parameters

##### appName

`string`

#### Returns

`Promise`\<`CustomerAppInfo`\>

#### Implementation of

`ManagementService.getCustomerApp`

***

### getCustomerAppConsumption()

> **getCustomerAppConsumption**(`appName`, `opts?`): `Promise`\<`CustomerAppConsumption`\>

Defined in: [src/airs/management.ts:371](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L371)

Get per-app token consumption + violation breakdown from the SCM dashboard endpoints.

#### Parameters

##### appName

`string`

##### opts?

`ConsumptionQueryOptions`

#### Returns

`Promise`\<`CustomerAppConsumption`\>

#### Implementation of

`ManagementService.getCustomerAppConsumption`

***

### getProfile()

> **getProfile**(`profileId`): `Promise`\<`SecurityProfileInfo`\>

Defined in: [src/airs/management.ts:247](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L247)

Get a single security profile by UUID.

#### Parameters

##### profileId

`string`

#### Returns

`Promise`\<`SecurityProfileInfo`\>

#### Implementation of

`ManagementService.getProfile`

***

### getProfileByName()

> **getProfileByName**(`profileName`): `Promise`\<`SecurityProfileInfo`\>

Defined in: [src/airs/management.ts:252](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L252)

Get a single security profile by name (returns highest revision).

#### Parameters

##### profileName

`string`

#### Returns

`Promise`\<`SecurityProfileInfo`\>

#### Implementation of

`ManagementService.getProfileByName`

***

### getProfileTopics()

> **getProfileTopics**(`profileName`): `Promise`\<[`ProfileTopic`](../interfaces/ProfileTopic.md)[]\>

Defined in: [src/airs/management.ts:175](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L175)

List all topics configured in a profile with full details.

#### Parameters

##### profileName

`string`

#### Returns

`Promise`\<[`ProfileTopic`](../interfaces/ProfileTopic.md)[]\>

#### Implementation of

`ManagementService.getProfileTopics`

***

### getTopic()

> **getTopic**(`topicId`): `Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

Defined in: [src/airs/management.ts:59](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L59)

Get a single custom topic by ID.

#### Parameters

##### topicId

`string`

#### Returns

`Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

#### Implementation of

`ManagementService.getTopic`

***

### getTopicByName()

> **getTopicByName**(`topicName`): `Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

Defined in: [src/airs/management.ts:66](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L66)

Get a single custom topic by name.

#### Parameters

##### topicName

`string`

#### Returns

`Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

#### Implementation of

`ManagementService.getTopicByName`

***

### listApiKeys()

> **listApiKeys**(`opts?`): `Promise`\<`ApiKeyListResult`\>

Defined in: [src/airs/management.ts:305](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L305)

#### Parameters

##### opts?

`PaginationOptions`

#### Returns

`Promise`\<`ApiKeyListResult`\>

#### Implementation of

`ManagementService.listApiKeys`

***

### listCustomerApps()

> **listCustomerApps**(`opts?`): `Promise`\<`CustomerAppListResult`\>

Defined in: [src/airs/management.ts:343](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L343)

#### Parameters

##### opts?

`PaginationOptions`

#### Returns

`Promise`\<`CustomerAppListResult`\>

#### Implementation of

`ManagementService.listCustomerApps`

***

### listDeploymentProfiles()

> **listDeploymentProfiles**(`opts?`): `Promise`\<`DeploymentProfileInfo`[]\>

Defined in: [src/airs/management.ts:438](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L438)

#### Parameters

##### opts?

###### unactivated?

`boolean`

#### Returns

`Promise`\<`DeploymentProfileInfo`[]\>

#### Implementation of

`ManagementService.listDeploymentProfiles`

***

### listProfiles()

> **listProfiles**(`opts?`): `Promise`\<`SecurityProfileListResult`\>

Defined in: [src/airs/management.ts:257](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L257)

List security profiles.

#### Parameters

##### opts?

`PaginationOptions`

#### Returns

`Promise`\<`SecurityProfileListResult`\>

#### Implementation of

`ManagementService.listProfiles`

***

### listTopics()

> **listTopics**(): `Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>[]\>

Defined in: [src/airs/management.ts:54](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L54)

List all custom topics.

#### Returns

`Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>[]\>

#### Implementation of

`ManagementService.listTopics`

***

### queryScanLogs()

> **queryScanLogs**(`opts`): `Promise`\<`ScanLogQueryResult`\>

Defined in: [src/airs/management.ts:449](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L449)

#### Parameters

##### opts

`ScanLogQueryOptions`

#### Returns

`Promise`\<`ScanLogQueryResult`\>

#### Implementation of

`ManagementService.queryScanLogs`

***

### regenerateApiKey()

> **regenerateApiKey**(`apiKeyId`, `request`): `Promise`\<`ApiKeyInfo`\>

Defined in: [src/airs/management.ts:320](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L320)

#### Parameters

##### apiKeyId

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`ApiKeyInfo`\>

#### Implementation of

`ManagementService.regenerateApiKey`

***

### updateCustomerApp()

> **updateCustomerApp**(`appId`, `request`): `Promise`\<`CustomerAppInfo`\>

Defined in: [src/airs/management.ts:358](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L358)

#### Parameters

##### appId

`string`

##### request

`Record`\<`string`, `unknown`\>

#### Returns

`Promise`\<`CustomerAppInfo`\>

#### Implementation of

`ManagementService.updateCustomerApp`

***

### updateProfile()

> **updateProfile**(`profileId`, `request`): `Promise`\<`SecurityProfileInfo`\>

Defined in: [src/airs/management.ts:272](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L272)

Update a security profile.

#### Parameters

##### profileId

`string`

##### request

`CreateSecurityProfileRequest`

#### Returns

`Promise`\<`SecurityProfileInfo`\>

#### Implementation of

`ManagementService.updateProfile`

***

### updateTopic()

> **updateTopic**(`topicId`, `request`): `Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

Defined in: [src/airs/management.ts:41](https://github.com/cdot65/prisma-airs-cli/blob/main/src/airs/management.ts#L41)

Update an existing custom topic by ID.

#### Parameters

##### topicId

`string`

##### request

`objectOutputType`

#### Returns

`Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>

#### Implementation of

`ManagementService.updateTopic`
