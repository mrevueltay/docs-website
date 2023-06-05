---
name: NrConsumption
type: event
dataSources:
  - Account Usage
attributes:
  - NrDailyUsage/consumingAccountId
  - NrDailyUsage/consumingAccountName
  - NrDailyUsage/masterAccountId
  - NrDailyUsage/masterAccountName
  - NrDailyUsage/productLine
---

This event records usage every hour, and is the equivalent of "real-time" usage. Use this event to observe usage trends over time. For aggregate views of usage across an entire billing period, use NrMTDConsumption.