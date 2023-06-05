---
name: NrIntegrationError
type: event
dataSources:
  - Account Usage
attributes:
  - Transaction/http.statusCode
---

The NrIntegrationError event captures error messages related to data ingest, such as exceeding limits or malformed data. 