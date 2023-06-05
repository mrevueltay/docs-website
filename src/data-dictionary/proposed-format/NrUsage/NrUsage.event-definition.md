---
name: NrUsage
type: event
dataSources:
  - Account Usage
attributes:
  - NrConsumption/metric
  - NrDailyUsage/consumingAccountId
  - NrDailyUsage/consumingAccountName
  - NrDailyUsage/masterAccountId
  - NrDailyUsage/masterAccountName
  - NrDailyUsage/productLine
  - NrDailyUsage/subAccountId
  - NrDailyUsage/subAccountName
---

This event records usage every hour and is used to see usage reported per product.