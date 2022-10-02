---
layout: post
head-extra: favico.html
title:  "What I learned from a project that almost failed"
date:   2022-10-01 00:00:00 -0800
categories: thoughts observations
---


One of the expectations of engineers at my company is to come up with impactful projects to work on. 
I was lucky enough to avoid this process for a long time since the teams I worked on had more problems to solve than engineers, so there was a lot of opportunity for everyone.

Eventually, though, I had to create a project out of nothing, and it was hard. 

Luckily the project was relatively successful - the feature I thought of and implemented ended up being used in another org-wide tool. However, the whole process and timelines were suboptimal, and I am sharing what happened and how I think I should make the same process better next time.

## I did many things wrong

I would approach the project and the situation much differently now, partially because of what I learned through working on this project. I am explaining some of the things I didn't do right.

### I started with the technology instead of understanding the problems our org was facing

I started the search for project ideas by looking at general ways to improve "growth ratings" (not a real problem domain, for obvious reasons). I did it since a colleague who moved to another team thought that was an important area and had written out some ideas. I spent too much time trying to understand the intricacies of growth ratings and existing tools before I even started understanding the problems our org faced and frankly even asking anyone if there were any well-known problems to solve. 

Luckily for me, the sister team was already working on a tool to detect "growth ratings" regressions, and only because they were close to us I was aware of their work, so I started looking into how I could contribute. There was a major regression at the time, and the sister team's tool was used to detect that, so I started applying my just-learned knowledge to try to diagnose the regression.


Eventually, my manager organized a meeting with the sister team, and they confirmed that there was an opportunity for me, which was made obvious by the recent regression. In particular, they said that their tool could detect that the regressions happen, but they don't know why it happened, and helping with that would be super helpful. *That was my project.*

**Learning: I should have started the whole process by reaching out to other teams and asking how I could help, as opposed to learning the technical details of different tools and hoping that process itself would lead to ideas.** Teams who spend time in a particular area have a lot more context and know what improvements could be made.

## I competed with the people who would use my tool instead of working with them

After we agreed on the high-level problem definition, I looked at that regression and tried to figure out what the problem was and if I could make a tool to help solve it.

Not surprisingly, I didn't reach out to the person who was trying to fix the regression. They were independently trying to figure out the regression cause, and it felt like we were competing with each other. 

**Learning: I should have approached the people trying to fix this and previous regressions and asked them how I could help and what kind of a tool would be helpful.** That way, I would have made allies instead of making it a competition. Also, I'd learn a lot from them, and I would have made some useful improvements.

## I didn't agree on the project breakdown and technical design

I ran into many issues along the way that were caused by a lack of communication and understanding, which ended up taking a lot of my time and put a strain on relationships with the sister team:
- Pretty late in the process of implementing my project, some people from the sister team opposed my work because they thought my changes were not performant enough. The concerns were reasonable, and there was a reason I decided not to pay attention to the performance, but I never communicated the trade-offs with anyone. I course-corrected, but the conversations were super intense and draining and took a while to resolve.
- I also pushed to replace the existing industry-standard tool with my project. This seemed like a good way to make my work more performant (which would have solved the performance concern), and it also seemed like a good technical challenge for me. It turned out it wasn't possible to do it for various reasons and also not necessary, but I still wasted a lot of time on it. 
- The results of my work were supposed to be shown in a particular UI. There were many ways to integrate my work with the UI, but only some very particular ways would utilize the benefits in the right way. I wasn't aware of this and we ended up integrating in the easiest way possible since this was done by a person on the other team (it was also a dependency issue, will I'll mention next).

**Learning: there is a reason companies do technical design documents. If I had written the problem definition and technical proposal with milestones, I could have gotten a lot of useful feedback in many areas.** For example, maybe I didn't understand the problem very well, maybe the solution wouldn't be as helpful as I thought or my understanding of the solution was incomplete, or perhaps there are some technical details I wasn't aware of, such as the performance constraints. Having my understanding of all of this in a document would have helped a lot, and the project would be more successful. It would also help with dependency breakdown.

## I didn't agree on the dependencies before I started execution

I depended on the sister's team to integrate my work into their own tool, and that drastically prolonged the project. This dependency was obvious to me, and we vaguely talked about it, but in practice, it ended up being an issue as they executed on their own priorities, and the integration was done by one person in their spare time and not in a way that would utilize my work in the best way possible. I felt like I was intruding and asking them to do something that wasn't important.

There are two ways this could have been avoided: (1) me changing their code directly, (2) asking the other team to officially support the project and work on it. Both of these would require us to agree on the project breakdown and then explicitly talk about the work on the dependencies. Selling the project better would have helped to get them to sign up for the work, but at the very least, this explicit conversation would have assured that they would allow me to work on their code and guide me through it.

**Learning: have an explicit conversation about the dependencies and the work division.** If the other teams want to sign up for the work, make sure it's a part of some official planning so that you can hold them accountable (such as OKR planning). If the agreement is that you'll do all the work, make sure that you have the support and that they'll guide you and not block you as you change their code.


## Conclusion - what to pay attention to when creating new projects

**An impactful project means a project that solves someone's problem.** I could have started the research process by looking for known problems instead of first learning about the existing tooling. Talking to the sister's team first and asking them about potential improvements they could benefit from would have given me this answer immediately. 

Then I could have talked to people who had to fix the regressions to confirm and learn what improvements would be helpful to them and try to work with them/create allies. This would have given me more insight into what kinds of regressions happen and how a tool like this can be helpful.

**Dependencies on other teams should be communicated and agreed upon first.** After agreeing on the people problem and a general solution, I could have proposed a more detailed technical solution (in terms of a design document) and talked to the sister team to agree on it. Since the work I did partially depended on the sister team, I could have been very explicit about identifying and defining the dependencies and then pushed to agree on the division of the work (e.g. me implementing all of it and them providing advice or them implementing some parts).

**Simply put, technical solutions are people first, technology second** I should have put a lot more work into talking to people and aligning on the problem definition as well as the solution before doing any technical work. That would have made the work much more impactful and would have taken less time. As an added benefit, it would have been much less stressful, and I would have made allies in the process.

----

*I will soon be in a position to look for new projects, and I will apply my own advice - let's see how my own advice holds against the real world.*

