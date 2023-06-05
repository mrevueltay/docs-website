---
name: BrowserTiming
type: event
dataSources:
  - Browser agent
attributes:
  - AjaxRequest/eventId
  - AjaxRequest/groupedPageURL
  - AjaxRequest/timeSinceBrowserInteractionStart
  - AjaxRequest/timeToLastCallbackEnd
  - AjaxRequest/timeToSettle
  - BrowserInteraction/actionText
  - BrowserInteraction/appId
  - BrowserInteraction/browserInteractionId
  - BrowserInteraction/browserInteractionName
  - BrowserInteraction/jsDuration
  - BrowserInteraction/parentEventId
  - BrowserInteraction/sessionTraceId
  - BrowserInteraction/timestamp
  - PageView/asn
  - PageView/asnLatitude
  - PageView/asnLongitude
  - PageView/asnOrganization
  - PageView/city
  - PageView/pageUrl
  - PageView/session
  - PageView/userAgentName
  - PageView/userAgentOS
  - PageView/userAgentVersion
---

`BrowserTiming` is a custom event that captures SPA timing data for browser interactions started using the custom `createTracer` SPA API method. `BrowserTiming` contains many of the same attributes used by other events, especially `AjaxRequest`.