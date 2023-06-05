---
name: PageAction
type: event
dataSources:
  - Browser agent
attributes:
  - BrowserInteraction/appId
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

The Browser PageAction event is the result of the addPageAction API call that sends a user-defined name and optional attributes, along with several default attributes, such as app and geographic data. It is used to capture any event that is not already tracked automatically by the Browser agent, such as clicking a Subscribe button or accessing a tutorial.