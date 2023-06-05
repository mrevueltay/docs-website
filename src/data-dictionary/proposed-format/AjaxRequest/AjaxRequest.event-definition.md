---
name: AjaxRequest
type: event
dataSources:
  - Browser agent
attributes:
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

`AjaxRequest` events occur for any `Ajax` request, including during a `BrowserInteraction` event. The event attribute tracks geographic and browser info. Use browser app settings to block specific requests.