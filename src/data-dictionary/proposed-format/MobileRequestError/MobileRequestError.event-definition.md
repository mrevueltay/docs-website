---
name: MobileRequestError
type: event
dataSources:
  - Mobile
attributes:
  - MobileCrash/deviceName
  - MobileRequest/requestDomain
  - MobileRequest/requestMethod
  - MobileRequest/requestPath
  - MobileRequest/requestUuid
  - MobileRequest/statusCode
  - MobileSession/appBuild
  - MobileSession/appName
  - MobileSession/appVersion
  - MobileSession/appVersionId
  - MobileSession/asnOwner
  - MobileSession/carrier
  - MobileSession/countryCode
  - MobileSession/device
  - MobileSession/deviceGroup
  - MobileSession/deviceManufacturer
  - MobileSession/deviceModel
  - MobileSession/deviceType
  - MobileSession/deviceUuid
  - MobileSession/lastInteraction
  - MobileSession/memUsageMb
  - MobileSession/newRelicVersion
  - MobileSession/osMajorVersion
  - MobileSession/osName
  - MobileSession/osVersion
  - MobileSession/platform
  - MobileSession/regionCode
  - MobileSession/sessionId
  - MobileSession/timeSinceLoad
  - MobileSession/uuid
  - PageView/asn
  - PageView/asnLatitude
  - PageView/asnLongitude
  - PageView/city
  - Span/guid
  - Span/trace.id
  - Span/traceId
---

A MobileRequestError is used for HTTP errors or network failures. HTTP errors are HTTP requests that have a status code greater than 400. A network failure is a HTTP request that results in no response. The event is sent when the HTTP request completes.