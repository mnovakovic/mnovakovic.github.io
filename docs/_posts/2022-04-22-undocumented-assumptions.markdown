---
layout: post
head-extra: favico.html
title:  "Document your assumptions"
date:   2022-04-22 12:00:00 -0800
categories: thoughts
---


In this post, I'm talking about two projects that I inherited that ended up taking longer than expected
due to undocumented assumptions and how I plan to address similar situations in the future.

# Undocumented assumptions lead to suboptimal results

Assumptions are made often and for different reasons. For the sake of simplicity, I will divide them into **documented** and **undocumented** assumptions.
In this context, assumptions being documented means that they are explicitly stated in a place that people refer to for project guidance, such as a [design doc](https://www.joelonsoftware.com/2000/10/02/painless-functional-specifications-part-1-why-bother/).
**The undocumented assumptions cause more issues because we're more likely to overlook them.**

Every project has both types of assumptions, and it is important to be aware of that.
Putting efforts into converting the implicit assumptions into explicit ones can help us prevent
failures and find more places to look at for root causes if something goes wrong.

In this post, both projects that I talk about were started by another team and had undocumented assumptions.
In both cases, these assumptions lead to suboptimal results, and if I was aware of
them, I would have pivoted earlier and made the projects more successful.


# Project 1 - the right tool for the wrong customer

I was pitched this project after a reorg.
The idea was to create a developer tool to help internal users do their job better (I am trying to keep it very vague on purpose).
I liked the idea, as I was already passionate about the domain since I had multiple occasions where I would have benefited from such a tool.
I was super excited to work on it and help our developers.

The plan was to start by supporting a relatively huge internal project as the first customer.
It seemed like a smart plan - a bigger project to support meant
more people to choose from to test the tool, more potential customers, and higher project success.
However, the plan was based on an undocumented assumption that this internal project was a suitable customer.


It turned out that the tool I was building was not suitable for the target project. It was borderline impossible to support it.
I started getting the signals early on, but I ignored them as supporting that team was the "plan of record."
**I did not question the direction because it wasn't documented.**

I spent months trying to make the tool fit the needs of the pre-selected team, but that didn't happen.
I pivoted eventually, but the feeling of having wasted a few months wasn't good.

# Project 2 - ignoring the official documentation

For this project, I didn't have to write any code.
All I had to do was to run an existing, well-known software to gather some data about my work environment.
It was supposed to be easy - I'd have to do some manual setup, but then the target software would run for a few hours and produce the relevant reports.

As with almost all other projects, somebody started working on it before me. Even though there is a high-quality manual from the software manufacturer,
they wrote an additional guide that incorporated the specifics of my company. Sounds wonderful.
And yet, for weeks before I started working on it, there wasn't a single successful run of this software, even though they were trying the whole time.

When I inherited the project, I didn't think much of the failed attempts. I thought the other team was probably not familiar enough with the system
and that I'll be able to do it in the expected timeframe. But that didn't happen. I followed the guide,
but the software repeatedly failed, with error messages that were impossible to connect to any real issue.

It was only more than a week later that I realized the guide the previous owner wrote made some seriously wrong assumptions and didn't document them.
In particular, we were running the tool over a wifi network, but it was supposed to be done via the ethernet cable.
The original manual from the software manufacturer vaguely suggested this, but it wasn't very clearly articulated either,
although I would have concluded that much earlier if I spent more time studying the original
manual instead of leaning a lot more on the guide I inherited.

In short, I fell into the same trap as before - I didn't question the assumptions that somebody made before me because they were not documented.

# Observe the world and seek undocumented assumptions

This will inevitably happen again - I'll inherit a project with some wrong or undocumented assumptions. That's just the nature of work - people
make some assumptions that make it easier to solve a problem in the short term, but they don't document them.
I do this myself, too, since it's hard to communicate all aspects of a project,
and sometimes the assumptions seem very obvious that it doesn't seem important to write them down.

It's impossible to expect myself or anyone else to state all the assumptions and all the context.
Instead, my approach is to be aware of the tricky nature of assumptions and observe how the project unrolls.

If the assumptions are documented, I'll keep questioning them, especially if it's not me who wrote them, so I don't have all the context.
Otherwise, as I learn more about the project, I'll observe the implicit assumptions
and convert them to documented, to make it easy to question them.
