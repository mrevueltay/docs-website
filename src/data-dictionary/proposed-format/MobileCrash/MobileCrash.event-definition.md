---
name: MobileCrash
type: event
dataSources:
  - Mobile
attributes:
  - Mobile/reportedTimestampMs
  - MobileHandledException/runTime
  - MobileSession/appBuild
  - MobileSession/appName
  - MobileSession/appVersion
  - MobileSession/appVersionId
  - MobileSession/asnOwner
  - MobileSession/bundleId
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
  - MobileSession/sessionCrashed
  - MobileSession/sessionId
  - MobileSession/uuid
  - PageView/asnLatitude
  - PageView/asnLongitude
  - PageView/city
---

The MobileCrash event is created when an app crashes. MobileCrash includes attributes such as crash line number, class, and crash message.