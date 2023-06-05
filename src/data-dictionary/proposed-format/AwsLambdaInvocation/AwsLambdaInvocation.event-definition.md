---
name: AwsLambdaInvocation
type: event
dataSources:
  - AWS Lambda
attributes:
  - Span/newRelic.ingestPoint
  - Span/traceId
  - Transaction/databaseCallCount
  - Transaction/databaseDuration
  - Transaction/externalCallCount
  - Transaction/externalDuration
  - Transaction/parent.account
  - Transaction/parent.app
  - Transaction/parent.transportType
  - Transaction/parent.type
  - Transaction/request.headers.accept
  - Transaction/request.headers.host
  - Transaction/request.headers.referer
  - Transaction/request.headers.userAgent
  - Transaction/request.method
  - Transaction/response.headers.contentLength
  - Transaction/response.headers.contentType
  - Transaction/totalTime
---

This event is reported by New Relic monitoring for AWS Lambda. This event captures overall function timing and associated metadata. A single `AwsLambdaInvocation` event is generated for each invocation.