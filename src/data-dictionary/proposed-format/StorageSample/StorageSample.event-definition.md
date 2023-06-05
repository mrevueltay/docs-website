---
name: StorageSample
type: event
dataSources:
  - Infrastructure
attributes:
  - NetworkSample/criticalViolationCount
  - NetworkSample/entityID
  - NetworkSample/kernelVersion
  - NetworkSample/linuxDistribution
  - NetworkSample/operatingSystem
  - NetworkSample/windowsFamily
  - NetworkSample/windowsPlatform
  - NetworkSample/windowsVersion
  - ProcessSample/agentVersion
  - SystemSample/agentName
  - SystemSample/diskFreeBytes
  - SystemSample/diskFreePercent
  - SystemSample/diskTotalBytes
  - SystemSample/diskUsedBytes
  - SystemSample/diskUsedPercent
  - SystemSample/fullHostname
---

StorageSample event represents a single storage device associated with a server. Each sample gathers descriptive information about the device, the type of file system it uses, and its current usage and capacity. New Relic samples this data every 20 seconds for each mounted file system and packages it into a StorageSample event, then sends the raw data to New Relic's collectors every 60 seconds.