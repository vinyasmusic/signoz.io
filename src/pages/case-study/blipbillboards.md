---
title:  How BlipBillBoards uses SigNoz to improve their issue resolution time by 14x
slug: blipbillboards
image: /img/case_study/BlipBillBoards.webp
authors: [pranay]
hide_table_of_contents: true

---
import { LiteYoutubeEmbed } from "react-lite-yt-embed";

# How BlipBillBoards uses SigNoz to improve their issue resolution time by 14x

<div class="avatar">
  <a
    class="avatar__photo-link avatar__photo avatar__photo--lg"
    href="https://twitter.com/pranay01">
    <img
      alt="Pranay Profile"
      src="/img/authors/pranay_profile_pic.webp" />
  </a>
  <div class="avatar__intro">
    <div class="avatar__name">Pranay Prateek</div>
    <small class="avatar__subtitle">
      Maintainer, SigNoz
    </small>
  </div>
</div>

<br />
<br />



*I sat down with Nate, Senior DevOps engineer at [BlipBillBoards](https://www.blipbillboards.com/) to understand how they use SigNoz at BlipBillBoards. Here’s a few snippets from our conversation (edited for legibility)*

![BlipBillBoards](/img/case_study/BlipBillBoards.webp)

### *Introduction*

My name is Nate. I work for Blip billboards. I'm a senior DevOps engineer at the company.  I love everything technical. I love all kind of maker  stuff. 

For the company, I actually do a lot of integration with various platforms, with various services. 

We put different services in different places to kind of monitor things, to kind of keep an eye on what's going on, get an idea of how our environments are responding, trying to get a good balance of performance for the application because too much monitoring can slow it down, but then also, like, a good balance of insight into how our application is running.

And so my whole goal is to try and optimize the application or to tell the developers where the application is suffering and then help them fix the issue.

### *What does BlipBillBoards do?*

BlipBillBoards is an advertising agency. They don't advertise themselves, but they connect advertisers to sign owners. 

So we have digital billboards here in the US. On the sides of freeways and on the sides of buildings. And these billboard owners don't have any way other than direct marketing to advertisers to display things on their signs.

And so we kind of stepped in in the middle there and said, hey, there's this advertiser that would like to play an ad on your sign at this time or this time period, this time frame. So we  coordinate the backend of getting the advertisers connected with the sign owners and then putting them together.

### *What were the business problem you're trying to solve with SigNoz? Any details you can share on your current scale with SigNoz*


<LiteYoutubeEmbed id="ISPfqGmJGYE" mute={false} />

<p>&nbsp;</p>


Sure, absolutely. So with SigNoz we're doing about 13 million to 40 million spans per hour depending on time of day. The number goes up during the day quite a bit to ~40mn spans/hr, but during the night it's like 13 million spans or so. This is when, primarily backend services are instrumented 

We use SigNoz to trace requests step by step.  That kind of stuff is invaluable. Before SigNoz, we tried jaeger same thing to try and trace through the code and trying to run it with Elasticsearch.

Elastic search kept wanting to die, like, all the time. It was just having all sorts of issues, when you try to scale it. When you're running a tiny little elastic search cluster, it's perfect. It has no issues at all. But trying to scale that thing up, it takes an entire team just to run it. And myself as one person is not capable of doing that.

SigNoz choosing ClickHouse is a very good idea because I have had no issues other than I gave it a few too few resources at the beginning. So tip to anyone else coming along down the line, make sure you give it enough resources by default. But other than that, it's been like, rock solid.

I've had no issues with it. It showed me exactly what's going on, how the code is flowing, where it's going, what logic it's using to determine what response it's going to give, and everything else going along with that.

### *Can you share any specific business use case you solved with SigNoz?*

We actually had this use case where a few months before I implemented, SigNoz. We had an endpoint that we call checklist.

And it's basically the checklist to make sure that an ad is ready to plan a sign. So if the ad has to go through, it has to get approved. It has to have the right tags on it. It has to be approved by the sign owner.

It has to go through all the checklists. And so it was a very slow endpoint. And we knew it was kind of slow, given the response times from the router, depending on what campaign it was, what organization it was that was trying to play those things.

But it was kind of nebulous because it was like, I took 20 seconds to render this, and I was like, well, so what did you do during that 20 seconds?

<figure data-zoomable align='center'>
    <img src="/img/case_study/trace-filter.webp" alt="SigNoz trace filter page "/>
    <figcaption><i>Trace filters helps you find interesting spans quickly, which you can dive deeper into </i></figcaption>
</figure>

<p>&nbsp;</p>


### *Logs were not helpful in this*

You could try and run a couple of queries to try and see, okay, what queries are being run? What's going on? But trying to correlate that to a specific end point is next to impossible with logs. So an outage that occurred because of that. This endpoint started getting so large and running so many queries that started taking down the site for everybody, not just for the person accessing that particular endpoint.

And I spent about two weeks diagnosing and finding the cause and then another two weeks fixing the cause because we didn't have any distributed tracing in place at that time when we were trying to debug this.

We were trying to do this by adding logs to different parts. But we were not getting a sense of how  a  request is flowing through different parts.

I had to add a log statement and then run a query and then add the log statement and run a query or like, add a couple of log statements and then run it again and try to see where it would go. And I was trying to reproduce it.

### *Many a times staging environment doesn’t reflect issues which come up in production*

 

The staging environment doesn't have the exact same date as the production environment, and it's not nearly as full featured. So when we were trying to run it in staging, the request was running and completing in seconds. And when we ran it in production, all of a sudden we were getting these timings out, and it was taking down the whole site and so the whole back end.

So we had to go through it bit by bit, trying to figure out, okay, what are the causes of this? Can we reproduce this in testing? Can we reproduce this in a staging environment? Can we do anything else like that? And it was just a couple of tedious weeks of just sitting there and digging through.

It was awful. And so I did finally fix it. We got that pushed out, and now the backend doesn't have any issues with the checklist stuff.

But now know. An endpoint came up just the other day. Now that we have SigNoz in place it took me 1 hour to figure out exactly why, how, and exactly what was going wrong.

### *N+1 query issue*

<figure data-zoomable align='center'>
    <img src="/img/case_study/Nplus1.webp" alt="N+1 query "/>
    <figcaption><i>N+1 queries are suboptimal and can lead to significant perf impact</i></figcaption>
</figure>

<p>&nbsp;</p>


And it showed me that is someone hit this particular endpoint with this campaign and this amount of data and it created all of these sequel queries, literally 100 SQL queries in a single request.  If you do a select on all of the rows you're looking for in the database at one go, it creates one SQL query.
It's a little bit big, not terrible. It takes like 5 seconds to complete, which is not great, but it's not terrible. 

Data is right there in memory, and you're able to iterate through it and do whatever you need to do. Before that, it was going out and it wouldn't cache this data. It would be selecting a single row at a time time. And because of that, it was taking over three minutes to complete the single request.

And by seeing the trace details in SigNoz, I showed the developers exactly what was going on. I showed them the data that was being passed in. And now,  instead of three minutes  it takes 2 seconds to complete the exact same request.

### ***What made you choose SigNoz over other solutions. What were the solutions you were trying, and then what made you choose SigNoz?***

<LiteYoutubeEmbed id="8b3rutiPnTc" mute={false} />

<p>&nbsp;</p>

Sure, we tried jaeger before, and that one thing that happened is that I think the open telemetry packages were a little bit forked at that time or something.

Basically, it caused performance issues, so we had to roll that one back. But on top of that, trying to keep jaeger up with an elastic search back end, the Elasticsearch just didn't want to scale very well.

It was fine for tiny little bits of data, but as soon as you went and tried to scale it up to the level that SigNoz is capable of handling, the Elasticsearch cluster fall over.

And I know it could be fixed with tuning. I know it could be fixed with like throwing more resources at it, throwing more elastic search nodes at it, but it just wasn't cost effective.

We started getting to the point that it was thousands of dollars per month just to on the Jaeger service and that's just not worth it.

A little bit of money is expected because developer time is very valuable, but also at a certain point you hit that tip over point where developer time is worth less than trying to keep up that  cluster.

And so it just wasn't very effective. It slowed down the site, it had all sorts of issues. This time we're still using the same open telemetry packages, but I think something has been fixed or improved along the way.

So we didn't have any of those issues this time with rolling out open telemetry into the code base. But also SigNoz is way more performant and way more resource efficient. So we don't need to throw nearly as many nodes at it. We don't need to throw nearly as much compute or RAM at it.

It just runs and it runs very efficiently for what it's doing. 

### *How much resources SigNoz needed to handle your scale?*

So we did have to upsize our Kubernetes cluster we were using. Using `t3large` before, and now we had to go up to `t3xlarge` because the amount of memory and CPU that was available on the `t3large` wasn't enough to run the ClickHouse database.

So the `t3xlarge`, as soon as we have created that, we basically dedicate one entire node to just the Click house database, and it's okay with that.

And then we also did auto scaling for the otel collectors to be able to collect that data accurately. We tell it as soon as one of those nodes hit 50% Ram or CPU, go ahead and bump it up a little bit, and then bump it back down when you don't need it.

And on average, we go between about, I want to say three otel collectors, up to about probably nine most I've seen in there for very short periods where there's little bursts and things like that. Altogether, if I remember right, it was about 32GB of RAM on average for everything altogether, including the ClickHouse and otel collector, including everything inside of the signals names. 32GB RAM for 40 mn spans per hour.

### ***What features do you use the most in SigNoz?***

That's the big thing we use the most is traces. We go and we look through the trace, we look at the spans, we look at the attributes that are set, look at the events that are thrown during that we have all those kind of things that are all showing exactly how that runs and that's incredibly helpful.

The second thing that I would say that we do the most with is the services which kind of show metrics like the P95, P99 as far as response times for different endpoints and looking at those, it's just nice to review and say hey look, this endpoint is taking a lot longer than these other endpoints.

<figure data-zoomable align='center'>
    <img src="/img/case_study/ServiceMap.webp" alt="Service Map "/>
    <figcaption><i>SigNoz Service Map shows a birds eye view of your architecture</i></figcaption>
</figure>

<p>&nbsp;</p>

### *Any advice you would have have for teams trying to set up their observability systems?*

Use automatic instrumentation. Absolutely wonderful. Make sure you follow that for whatever language it is. Say it allows different libraries in to automatically instrument things like your database calls, your various http calls, all those kind of things. Don't worry about instrumenting yourself, just use the auto instrumenting. Get something set up, get something going because it is so insightful to just see things like laid out.

The second thing I would say is like if you have an endpoint or if you have a place where there's a common endpoint that comes in to your application, wrap that in a span. Because all of those different things are automatically instrumented aren't necessarily tied together with a single request. By default you're.

Instrument one place, make sure you instrument the place where everything enters your system. So if there's like, a routing handling system, if there's some kind of a piece of code that handles requests coming in, if there's some place that handles that, you basically can wrap that in a single span, and then all of those database calls get tied together, and it's wonderful.


----

Check out our GitHub repo to get started with your observability journey

[![SigNoz GitHub repo](/img/blog/common/signoz_github.webp)](https://github.com/SigNoz/signoz)
