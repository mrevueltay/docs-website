---
name: PageView
type: event
dataSources:
  - Browser agent
attributes:
  - BrowserInteraction/appId
  - BrowserInteraction/firstContentfulPaint
  - BrowserInteraction/firstPaint
  - BrowserInteraction/timestamp
---

PageView events occur when a user navigates to (loads) a new page. It tracks geographic and timing data for each browser page load.