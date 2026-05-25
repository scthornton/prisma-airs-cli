# Class: SdkManagementService

Defined in: [src/airs/management.ts:29](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L29)

Wraps the SDK's ManagementClient to implement our ManagementService interface.
OAuth2 token management, caching, and retry are handled by the SDK.

## Implements

- `ManagementService`

## Constructors

### Constructor

> **new SdkManagementService**(`opts?`): `SdkManagementService`

Defined in: [src/airs/management.ts:32](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L32)

#### Parameters

##### opts?

`ManagementClientOptions`

#### Returns

`SdkManagementService`

## Methods

### assignTopicsToProfile()

> **assignTopicsToProfile**(`profileName`, `topics`, `guardrailAction?`): `Promise`\<`void`\>

Defined in: [src/airs/management.ts:94](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L94)

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

Defined in: [src/airs/management.ts:76](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L76)

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

Defined in: [src/airs/management.ts:314](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L314)

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

Defined in: [src/airs/management.ts:266](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L266)

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

Defined in: [src/airs/management.ts:36](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L36)

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

Defined in: [src/airs/management.ts:324](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L324)

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

Defined in: [src/airs/management.ts:365](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L365)

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

Defined in: [src/airs/management.ts:279](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L279)

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

Defined in: [src/airs/management.ts:44](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L44)

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

Defined in: [src/airs/management.ts:284](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L284)

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

Defined in: [src/airs/management.ts:48](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L48)

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

Defined in: [src/airs/management.ts:352](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L352)

#### Parameters

##### appName

`string`

#### Returns

`Promise`\<`CustomerAppInfo`\>

#### Implementation of

`ManagementService.getCustomerApp`

***

### getProfile()

> **getProfile**(`profileId`): `Promise`\<`SecurityProfileInfo`\>

Defined in: [src/airs/management.ts:246](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L246)

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

Defined in: [src/airs/management.ts:251](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L251)

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

Defined in: [src/airs/management.ts:174](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L174)

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

Defined in: [src/airs/management.ts:58](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L58)

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

Defined in: [src/airs/management.ts:65](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L65)

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

Defined in: [src/airs/management.ts:304](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L304)

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

Defined in: [src/airs/management.ts:342](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L342)

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

Defined in: [src/airs/management.ts:374](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L374)

#### Parameters

##### opts?

###### unactivated?

`boolean`

#### Returns

`Promise`\<`DeploymentProfileInfo`[]\>

#### Implementation of

`ManagementService.listDeploymentProfiles`

***

### listDlpProfiles()

> **listDlpProfiles**(): `Promise`\<`DlpProfileInfo`[]\>

Defined in: [src/airs/management.ts:385](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L385)

#### Returns

`Promise`\<`DlpProfileInfo`[]\>

#### Implementation of

`ManagementService.listDlpProfiles`

***

### listProfiles()

> **listProfiles**(`opts?`): `Promise`\<`SecurityProfileListResult`\>

Defined in: [src/airs/management.ts:256](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L256)

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

Defined in: [src/airs/management.ts:53](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L53)

List all custom topics.

#### Returns

`Promise`\<`objectOutputType`\<\{ `active`: `ZodOptional`\<`ZodBoolean`\>; `created_by`: `ZodOptional`\<`ZodString`\>; `created_ts`: `ZodOptional`\<`ZodString`\>; `description`: `ZodString`; `examples`: `ZodArray`\<`ZodString`, `"many"`\>; `last_modified_ts`: `ZodOptional`\<`ZodString`\>; `revision`: `ZodNumber`; `topic_id`: `ZodOptional`\<`ZodString`\>; `topic_name`: `ZodString`; `updated_by`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>[]\>

#### Implementation of

`ManagementService.listTopics`

***

### queryScanLogs()

> **queryScanLogs**(`opts`): `Promise`\<`ScanLogQueryResult`\>

Defined in: [src/airs/management.ts:396](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L396)

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

Defined in: [src/airs/management.ts:319](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L319)

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

Defined in: [src/airs/management.ts:357](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L357)

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

Defined in: [src/airs/management.ts:271](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L271)

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

Defined in: [src/airs/management.ts:40](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/airs/management.ts#L40)

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
