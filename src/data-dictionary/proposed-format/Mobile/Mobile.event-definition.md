---
name: Mobile
type: event
dataSources:
  - Mobile
attributes:
  - MobileCrash/deviceName
  - MobileCrash/osBuild
  - MobileSession/carrier
  - MobileSession/countryCode
  - MobileSession/device
  - MobileSession/deviceGroup
  - MobileSession/deviceManufacturer
  - MobileSession/deviceModel
  - MobileSession/deviceType
  - MobileSession/deviceUuid
  - MobileSession/lastInteraction
  - MobileSession/regionCode
  - MobileSession/timeSinceLoad
  - PageView/city
---

A Mobile event is created when a crash occurs, when an interaction ends or has run for 1 second, or if a session completes after the app is closed, backgrounded, or has run for 10 minutes. Mobile events were once the only event type and were generated for every event, but now there are several specialized event types. Recommendation: Upgrade to the most recent mobile monitoring agent version to take full advantage of the new event types.