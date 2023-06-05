---
name: NrMTDConsumption
type: event
dataSources:
  - Account Usage
attributes:
  - NrConsumption/BytesIngested
  - NrConsumption/CoreUsers
  - NrConsumption/FullUsers
  - NrConsumption/GigabytesIngested
  - NrConsumption/consumption
  - NrConsumption/estimatedCost
  - NrConsumption/metric
  - NrConsumption/month
  - NrConsumption/monthTimestamp
  - NrDailyUsage/masterAccountId
  - NrDailyUsage/productLine
---

This event tracks your New Relic usage (data and billable users) and estimated cost across an entire calendar month. It generates aggregate values from the `NrConsumption` event.