---
name: TransactionError
type: event
dataSources:
  - APM
attributes:
  - AwsLambdaInvocation/request.headers.contentLength
  - AwsLambdaInvocation/request.headers.contentType
  - Span/trace.id
  - Transaction/databaseCallCount
  - Transaction/databaseDuration
  - Transaction/eventLoopTime
  - Transaction/eventLoopWait
  - Transaction/externalCallCount
  - Transaction/externalDuration
  - Transaction/gcCumulative
  - Transaction/http.statusCode
  - Transaction/http.statusText
  - Transaction/memcacheDuration
  - Transaction/parent.account
  - Transaction/parent.app
  - Transaction/parent.transportDuration
  - Transaction/parent.transportType
  - Transaction/parent.type
  - Transaction/request.headers.accept
  - Transaction/request.headers.host
  - Transaction/request.headers.referer
  - Transaction/request.headers.userAgent
  - Transaction/request.method
  - Transaction/response.headers.contentLength
  - Transaction/response.headers.contentType
---

Transaction errors occur when a transaction throws an exception in the code path that was taken to complete that transaction. The number of transaction errors does not equal the number of transactions, because you can specify whether you want to collect, ignore, or mark errors as expected.