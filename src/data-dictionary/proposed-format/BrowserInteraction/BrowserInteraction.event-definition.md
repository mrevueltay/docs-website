---
name: BrowserInteraction
type: event
dataSources:
  - Browser agent
attributes:
  - AjaxRequest/eventId
  - AjaxRequest/timeToLastCallbackEnd
  - PageView/asn
  - PageView/asnLatitude
  - PageView/asnLongitude
  - PageView/asnOrganization
  - PageView/city
  - PageView/domain
  - PageView/session
  - PageView/userAgentName
  - PageView/userAgentOS
  - PageView/userAgentVersion
---

A `BrowserInteraction` represents a unit of work in a browser session, triggered by a user interacting with the webpage. It captures information about the session, AJAX calls and custom JavaScript timing that occurred as a result of the interaction. Initial load and route changes are captured as special types of browser interactions, and are used for SPA monitoring.