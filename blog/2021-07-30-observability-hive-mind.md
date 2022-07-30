---
title: Not 3 pillars but a single whole to help customers solve issues faster
slug: observability-hive-mind
date: 2022-07-30
tags: [Observability]
authors: [pranay]
description: Not 3 pillars but a single whole to help customers solve issues faster
image: /img/blog/2022/07/redis_monitoring_opentelemetry_signoz.webp
keywords:
  - observability
---

# Not 3 pillars but a single whole to help customers solve issues faster

Wherever you read about observability, you are told that there are "3 pillars"

of observability - `Metrics`, `Traces` and `Logs`

An image which is generally created is 

![3-pillars.png](/img/blog/2022/07/3-pillars.png)

But wait a minute, why are there only 3 pillars and does it really matter to the end user

At the end of the day, users are just trying to solve their problems fast.

Their payment service is throwing errors and customers are not able to start using their service. The customer success team is breathing down their neck to know when this problem will be resolved. Do you think the engineer is thinking about - okay what are the 3 pillars - let me check pillar 1, pillar 2 and pillar 3 and see what do they give me

My guess is, No

They just care about their problem being solved. and FAST.

Like any other tool, observability tool also solves a problem and the one of the main problem it solves is - if something is going wrong, can I find what it is and then fix it fast. 

In my experience, finding what exactly is wrong is the bulk of the problem. Is it a DB which is getting slow because of a particular type of query or you machine CPU usage is peaking which is causing the service to take a longer time to respond or it is a third party API which suddenly decided to die down on you.

Modern engineering systems are complex and involve many moving components. Finding where things are going wrong is non-trivial.

And in our view solving such complex problems need correlation across different signals. 

Ok, so you find in your trace graph that an operation is taking more time. What could be the reason for that - is the VM’s CPU getting saturated? Or are there some logs by that service which show that there was a mutex locking problem. You want to see everything in context.

That is why at SigNoz, we don’t believe in pillars or silos. There are just different signals which you want to see in a correlated way in context to figure out whats the problem quickly.

I think an analogy of a mesh or network may be more apt here. Rather than the 3 silos supporting making up a stack, think of it more as an observability hive mind which can correlate, talk to each other and point you to the source of the problems

![o11y-hivemind-trans.png](/img/blog/2022/07/o11y-hivemind-trans.png)

That’s why at SIgNoz we have a single underlying datastore which helps you correlate across signals much more seamlessly. 

Also, we have chosen columnar databases as our main workhorse as we think observability is fundamentally an anlaytics and correlation problem. The main need is to find the source of the problem fast. And for this writing queries on aggregates are very important. 

You first want to find - Ok, show me p99 latency graphs by service. then you would find Ok a particular service is showing higher latency. Then you would add some filters around specific APIs or status codes which may be causing this - and narrow down on the problem.

This would  needs lots of slicing and dicing, group bys, counts - and this is where columnar databases shine.

Recenly, Uber also moved from Elastic to ClickHouse as their database for their logs infra because they found that 60-70% of their logs queries were aggregation queries and columnar databases are designed for such queries and perform much faster

At SigNoz, we think a lot about how to provide insights faster to users and our belief is that which a single app which has different type of signals and lets you correlate among them (rather than installing a set of siloed tools and then making them talk to each other and facing all the issues in setting different systems and creating matching data formats)

- Single app for all telemetry signals
- Powerful aggregation and correlation capabilities

### Honeycomb article reference

### Feature in Honeycomb book

Would love to hear about how your experience has been