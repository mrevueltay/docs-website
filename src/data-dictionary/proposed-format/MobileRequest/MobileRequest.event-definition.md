---
name: MobileRequest
type: event
dataSources:
  - Mobile
attributes:
  - MobileCrash/deviceName
  - MobileRequestError/bytesReceived
  - MobileRequestError/bytesSent
  - MobileRequestError/connectionType
  - MobileRequestError/deviceSize
  - MobileRequestError/responseTime
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

A MobileRequest event is created when an HTTP request successfully completes, resulting in a response code below 400.