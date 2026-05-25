# Function: detectConflicts()

> **detectConflicts**(`topicResults`): [`ConflictPair`](../interfaces/ConflictPair.md)[]

Defined in: [src/audit/evaluator.ts:48](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/audit/evaluator.ts#L48)

Detect cross-topic conflicts by finding prompts that appear as FN for one
topic and FP for another — indicating the topics interfere with each other.

## Parameters

### topicResults

[`TopicAuditResult`](../interfaces/TopicAuditResult.md)[]

## Returns

[`ConflictPair`](../interfaces/ConflictPair.md)[]
