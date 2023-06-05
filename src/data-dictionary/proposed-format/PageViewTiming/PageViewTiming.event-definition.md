---
name: PageViewTiming
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
  - PageView/browserTransactionName
  - PageView/city
  - PageView/domain
  - PageView/pageUrl
  - PageView/session
  - PageView/userAgentName
  - PageView/userAgentOS
  - PageView/userAgentVersion
---

This event represents individual timing events during a page view lifecycle (for example, time when the largest element is displayed, or the first user interaction with the page). See [the PageViewTiming docs](/docs/browser/new-relic-browser/page-load-timing-resources/pageviewtiming-async-or-dynamic-page-details/#interactivity-metrics) for a list of reported events.