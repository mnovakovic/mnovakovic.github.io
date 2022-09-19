---
layout: post
head-extra: favico.html
title:  "What I learned from a project that almost failed"
date:   2022-09-03 00:00:00 -0800
categories: thoughts observations
---


One of the expectations of engineers at my company is to come up with impactful projects. 
This is not required though and often teams have more problems to solve then engineers so there are plenty of projects to chose from. I was lucky enough to avoid the process for a long time.

Eventually though, I had to create a project out of nothing and it was hard. 

Luckily I ended up being sort of succesful and the project I thought of and implemented ended up being used in another project. However, the whole process and timelines were super subomptimal and I am sharing what happened and how I think I should make the same process better next time.

## What did I do

I started the search for ideas by looking at general ways to improve "the memory usage". I did it since a colleague who moved to another project thought that was a good idea and had written out some ideas. I spent time looking both at the existing industry-approved tools, as well as the tools that our company created. I definitely spent too much time trying to understand the intricancies of "the memory usage" before I even started talking to people in our org.

I don't remember how the connection happened, but a sister team was already working on a tool to optimize "the memory usage", and they told me that there was a regression recently and that was an opportunity for me. In particular they said that their tool can detect the regressions but once the regression happens, they don't know why it happened and helping with that would be super helpful. My manager at the time organized a meeting to talk about it and confirm it with the sister team's manager that this is an opportunity indeed. Important note: I wouldn't have organized this meeting myself at the time as I was always trying to find the answer myself as opposed to talking to people. I think this is a habit I developed as a junior engineer where I was often told to figure out the technical details on my own. This is true - figuring out technical stuff is a must if you want to grow as an engineer. The difference is that these questions were not technical, they were about high-level use cases and the idea behind the tool which is much different.

So I took a look at that regression and tried to figure out what was the problem and if I can make a tool that would help with it. It took a while and I did it.
The issue was that it felt like I was competing with the person from the regression-causing project. That person was independently trying to figure out the regression causes and we were coming to similar conclussions (sort of a proof that I was on the right track), but that person knew more details, which is not surprising. What I should have done is approact the person and try to understand what they were doing to understand the regression and talked to them about what would have helped them in the process.

I also got in a situation where some people from the sister team opposed some of the changes I did because they thought my changes were not performant enough. The conversations with that person were often leading to nowhere, and even though I finally found a way to make them happy it felt like a lot of time was wasted.

Another thing I pushed for in the end was to try to replace the existing industry-standard tool we used with my script. This seemed like a good way to make the whole tooling more performant (which was raised as an issue), and also seemed like a good technical challenge for me. It turned out it wasn't possible to do it for various reasons. One good thing I did here is that because of the time pressure I spent a day or two trying to figure out if this was even possible as opposed to trying to spend weeks to do it. I confirmed with the MT owner that this is not even needed, so this felt like a god thing - I spent myself a lot of time to avoid doing something that wasn't even needed. This made me realize that I could have probably saved a lot more time if I confirmed other aspects with different people. 

Lastly, the results of this project were shown in a particular UI. Even though we were measuring the memory of a process it turned out the different processes were grouped in some logical ways and we were showing them as a part of the group, and this group-level memory usage was what everyone looked at. So even though my addition was able to track down memory break down per process, it didn't end up being shown in the tool that everyone used. Conclusion: I should have understood the whole process of how the sister's team project was used much better before I even started writing any code. Then I would have known much better what changes would be useful for the end user, 

Also, I was depending on the sister's team to integrate my script into their tool, as well as integrate this into the UI. Both of these drastically prolonged the project! I think this could have been made better by (1) selling the tool much better to the sister's team. They were aware I was working on it but if I asked them for timelines/resources and/or communicated to them more often they would have seen this as more important. (2) changing their code directly. People don't like if someone changes their code, but I could have probably asked to change their code and add these changes myself! Talking to the sister's team's management and the prople who own the tool would have helped with that. One important thing I learned is that you either ask for some official way for you to depend on them (for example, if they accept to do a well defined project in company's goal planning), so that you can hold them accountable, even publicly if needed (it shouldn't come to that ever though but you have a reason to nudge them), or to ask them to let you contribute to their project, and then you agree on how to do it (code style or design docs or whatever).


What is the process I should have done?
- Started with the sister team's project and asked them what it does and if they see any room for improvements (maybe they already knew very well that once the regression happens they know that it't not clear what to do about it)
- Learned the whole set of features that the tool is doing and how the regressions end up in the UI - this is where I would have learned about the single process vs process group.
- Talk to the users and those that had to fix the regressions. This is where I would have learned what they are looking for with the improvements. Maybe the regressions don't happen that often at all?
- After completing the info from above I would have known what the requirements are and then I could have talked to the sister team about implementing this and how they're going to help me or if they're going to help me at all.

The issue here is also how to focus your time. Also people don't want to talk to you that often so how do you learn the most by not wasting people's time, but also by not spending weeks on your own trying to understand something.


I didn't:
- Confirm with the users of this project that my improvement would be needed or useful
- Confirm with the owners of the main project that my idea is useful
- Optimize the work for final outcome as opposed to technical complexity
- Make sure I don't depend on others

## Takeaways

**An impactful project means a project that solves someone's problem.** I could have started the whole research process by looking for a known problem instead of first learning about the existing tooling. Talking to the sister's team first and asking them about potential improvements they could benefit from would have given me this answer immediately. This would have saved me so much time.

Then I could have talked to people who had to fix the regressions to ask them if this improvement would be useful to them and try to work with them/create allies. This would have given me more insight into what kinds of regressions happen and how can a tool like this be helpful.

**Dependance on other teams should be communicated and agreed upon first.** After agreeing on the people problem and a general solution for it, I could have proposed a more detailed technical solution (in terms of a design document) and talked to the sister team to agree on it. Since the work I did partially depended on the sister team, I could have been very explicit about identifying and defining the dependencies and then pushed to agree on the division of the work (e.g. me implementing all of it and them providing advice or them implementing some parts).

**Simply put, technical solutions are people first, technology second** I should have put a lot more work into talking to people and aligning on the problem definition as well as the solution before doing any technical work. That would have made the work much more impactful and would have taken less time. As the added benefit it would have been much less stressful and I would have made allies in the process.



== MARKO
What do I want to accomplish with this post?

