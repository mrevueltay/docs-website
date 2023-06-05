---
name: MobileHandledException
type: event
dataSources:
  - Mobile
attributes:
  - MobileCrash/deviceName
  - MobileCrash/osBuild
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
---

MobileHandledException is sent when an exception is caught and is used for non-fatal exceptions reported to New Relic using the recordHandledException API for Android or iOS.