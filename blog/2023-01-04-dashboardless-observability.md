---
title: Dashboardless Observability
slug: dashboardless-observability
date: 2023-01-04
tags: [Tech Tutorial]
authors: [pranay]
description: Dashboards are core in observability systems, but it also restricts you with what data you have created dashboards for
image: /img/blog/2023/01/microservices_logging_cover.webp
keywords:
  - observability dashboard
  - dashboard less observability
  - dashboards
---
<head>
  <link rel="canonical" href="https://signoz.io/blog/microservices-logging/"/>
</head>

Dashboards are core in observability systems, but it also restricts you with what data you have reated dashboards for. If we think about it, why do we need dashboards? Why can't we just analyse all observability data and surface insights directly

<!--truncate-->

![Cover Image](/img/blog/2023/01/microservices_logging_cover.webp)

## Why are dashboards used?

Observability tools often use dashboards to provide a visual representation of the data being collected about a system's performance and behavior. Dashboards can make it easier to quickly understand the current state and trends of the system, and can be customized to display the most relevant and important information to the user. Dashboards can also be useful for alerting purposes, as they can be configured to highlight any issues or deviations from expected behavior.

Additionally, dashboards can be a useful tool for sharing information about a system's performance with team members or stakeholders. By providing a centralized, real-time view of the system's behavior, dashboards can help to facilitate collaboration and decision-making.

## Issues with dashboards in observability
Logging is an important aspect of any software system. It is especially important in a microservices architecture, where there may be many different services running concurrently and interacting with each other.

In a microservices system, it is important to log events and errors at the service level so that it is possible to track and debug issues that may arise within a specific service. It is also important to have a centralized logging system that can collect and store log messages from all of the different services so that it is possible to get a holistic view of the system and identify patterns or trends that may not be apparent from looking at the logs of a single service.

## Breaking free from Dashboards - Dashboard less observability

Dashboardless observability refers to a approach to monitoring and analyzing systems, where the focus is on collecting and storing raw data about the system's performance and behavior, rather than creating visualizations and dashboards to display this data. With dashboardless observability, the goal is to have a complete and accurate record of the system's behavior, which can then be used to identify and troubleshoot issues, rather than relying on pre-defined dashboards that may not show all relevant information. This approach allows for greater flexibility and customization in how the data is analyzed and used, but may require more effort to set up and maintain.

That being said, it is also possible to analyze observability data without using dashboards. For example, data collected by observability tools can be stored in a central repository and queried using AI/ML


## Role of AI and ML to generate insights from observability data 

By using algorithms to process and analyze the data, AI and ML systems can identify patterns and trends that may not be immediately apparent to humans.

One way that AI and ML can be used for this purpose is through the use of anomaly detection algorithms. These algorithms can analyze observability data over time and identify any deviations from expected patterns, which may indicate a problem with the system. These deviations can then be flagged for further investigation.

Another way that AI and ML can be used is through the development of predictive models. By analyzing historical observability data, these models can learn to predict future behavior of the system and identify potential issues before they occur.

Overall, the use of AI and ML can help to surface insights from observability data more efficiently and effectively, potentially reducing the need for manual analysis and the use of dashboards.


## Conclusion



---

**Related Posts**

[Why is Distributed Tracing in Microservices needed?](https://signoz.io/blog/distributed-tracing-in-microservices/)

[Context Propagation in Distributed Tracing](https://signoz.io/blog/context-propagation-in-distributed-tracing/)
