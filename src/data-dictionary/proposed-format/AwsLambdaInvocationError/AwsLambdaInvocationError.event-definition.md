---
name: AwsLambdaInvocationError
type: event
dataSources:
  - AWS Lambda
attributes:
  - AwsLambdaInvocation/aws.lambda.arn
  - AwsLambdaInvocation/aws.lambda.coldStart
  - AwsLambdaInvocation/aws.lambda.eventSource.arn
  - AwsLambdaInvocation/aws.requestId
  - AwsLambdaInvocation/duration
  - AwsLambdaInvocation/request.headers.contentLength
  - AwsLambdaInvocation/request.headers.contentType
  - AwsLambdaInvocation/type
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
---

This event is reported by New Relic monitoring for AWS Lambda. It's generated when an error occurs during a Lambda function invocation.