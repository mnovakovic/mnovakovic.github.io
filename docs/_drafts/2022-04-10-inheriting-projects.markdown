---
layout: post
head-extra: favico.html
title:  "Inheriting and Driving Projects"
date:   2022-04-10 12:00:00 -0800
categories: thoughts
---

<!-- The post-concussion project that didn't have enought impact and how I should have done the research first instead of just doing what I was told.
 Should have picked other projetcs to support instead of the one that was really not a good target for this -->

In this post I'm talking about two projects that ended up taking more time than needed due to making wrong assumptions,
and how I plan to address this issue in the future.

# Assumptions

Assumptions are made often and for different reasons. For the sake of simplicity and to illustrate the issues I am
trying to present here, I will divide them into those made explicitly with a plan to revise them later, and those
made implicitly that are often not even documented.

For example, we can make an explicit assumption that the cost of the project will not be an issue, and start executing on it
in order to understand if the project is technically feasible.
If the assumption is made on purpose and documented, it can be revised at a later point.
The same assumption can be also made implicitly due to bad planning, and it can lead to project's failure if the project can't be funded.

Every project has both implicit and explicit assumptions and it is important to be aware of that, as it gives us broader set of
areas to look for rootcauses if a problem occurs. We can also prevent issues by converting the implicit
assumptions to explicit, and questioning them.

In both examples I present, I inherited the project and the assumptions were made before I took over, but that is in
no way an excuse. Both times, some of the assumptions made ended up leading to suboptimal results, and if I was aware of
this I could have pivoted earlier and made the projects better.


# Project 1 - The right software targeting the wrong users

I was pitched this project after a reorg. The idea was to create a developer tool that was
supposed to help some of our internal users do their job better (I am trying to keep it very vague on purpose).
I liked the idea, and I was already passionate about it since I had multiple occastions where I would have benefited from such tool
and I was happy to work on it.

The plan was based on an implicit assumption that also sounded very reasonable - the idea was to support a relatively huge internal project as the first customer.
This meant more people to choose from to test the tool, as well as more potential customers, meaning bigger success of the project.

It turned out that this project was not at all suitable for the tool I worked on, and supporting it was borderline not even possible.
I started getting the signals early on, but I ignored them as supporting that team was "plan of record". **I did not question the assumption.**

Needless to say, I spent months trying to make my project fit the needs
of the pre-selected team but that didn't happen. I pivoted eventually, but the feeling of having wasted a few months wasn't good.

## What would I do now?

Looking back, I should have done some research on the feasibility of supporting this pre-determined team. Following those steps, I should have done
further research into what teams I should support. These all track back to the implicit assumptions made, and not to the real data.
I think I would have probably left the project right after this phase, given what I know about it now.

# Project 2 - wrong approach to the problem

This was supposed to be an easy project.
All I had to do was to run an existing, well-known software to gather some info about the enviroinment I operated in.
I didn't have to program anything, just to effectively press a button.

As with almost all other projects, somebody started working on it already and there was a guide to help us. Sounds wonderful.
However, for weeks before I started working on it, there wasn't a single succesfull run of this software.

It was supposed to be a matter of starting the software, leaving it on, and coming back a few hours latter to collect the report.

I took over and I thought something simple was off. I would follow the guide and it was failing over and over again, with error messages that were
impossible to connect to any real issue.

It was only a couple days later that I realized it's the guide that made some assumptions. We were running the tool over a wifi network but it was
supposed to be done via the ethernet cable. The original guide suggested that this should not

I fell into the same trap as before - I believed the assumptions that somebody made before me.



# Conclusions

This will inevitable to happen again - I'll inherit a project that had some wrong or outdated assumptions. That's just the nature of work - people
make some assumptions that make it easier to solve a problem in the short term, with the non-well-documented idea to re-assess the assumptions
after the first iteration.
I do this myself too, since it's hard to comminicate all the aspects of a project,
and sometimes the assumptions seem very obvious that it doesn't seem important to add them to any document.

I think the solution is to just be aware of it - I'll try to just be more open-minded and ready to question every assumption.








