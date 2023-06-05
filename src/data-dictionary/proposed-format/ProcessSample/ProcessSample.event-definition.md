---
name: ProcessSample
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
  - StorageSample/warningViolationCount
  - SystemSample/agentName
  - SystemSample/fullHostname
---

ProcessSample event gathers detailed resource usage information from programs running on a single system. New Relic samples the data every 20 seconds for every active process and packages it into a ProcessSample event, which then sends the raw data to New Relic's collectors every 60 seconds.