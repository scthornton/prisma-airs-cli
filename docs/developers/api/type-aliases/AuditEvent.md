# Type Alias: AuditEvent

> **AuditEvent** = \{ `topics`: [`ProfileTopic`](../interfaces/ProfileTopic.md)[]; `type`: `"topics:loaded"`; \} \| \{ `count`: `number`; `topicName`: `string`; `type`: `"tests:generated"`; \} \| \{ `completed`: `number`; `total`: `number`; `type`: `"scan:progress"`; \} \| \{ `result`: [`AuditResult`](../interfaces/AuditResult.md); `type`: `"evaluate:complete"`; \} \| \{ `result`: [`AuditResult`](../interfaces/AuditResult.md); `type`: `"audit:complete"`; \}

Defined in: [src/audit/types.ts:41](https://github.com/cdot65/prisma-airs-cli/blob/825fa649f4587acd7963f80c6325ac57a4637842/src/audit/types.ts#L41)

Audit event union yielded by the audit runner.
