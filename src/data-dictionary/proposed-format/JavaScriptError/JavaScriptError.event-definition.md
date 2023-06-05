---
name: JavaScriptError
type: event
dataSources:
  - Browser agent
attributes:
  - BrowserInteraction/actionText
  - BrowserInteraction/browserInteractionId
  - BrowserInteraction/monitorAccountId
  - BrowserInteraction/monitorJobId
  - BrowserInteraction/parentEventId
  - BrowserInteraction/sessionTraceId
  - PageView/asn
  - PageView/asnLatitude
  - PageView/asnLongitude
  - PageView/asnOrganization
  - PageView/city
  - PageView/domain
  - PageView/pageUrl
  - PageView/session
  - PageView/userAgentName
  - PageView/userAgentOS
  - PageView/userAgentVersion
  - SyntheticCheck/entityGuid
---

As JavaScript errors are triggered, we capture details as events. The JavaScriptError event contains information to help you segment errors to understand how they impact performance.