---
layout: post
head-extra: favico.html
title:  "What I learned from a failed project that almost failed"
date:   2022-09-03 00:00:00 -0800
categories: thoughts observations
---


One of the things we need to do as a part of our work is to come up with projects on our own. 
This was the first time I tried to come up with a project and it was hard. 
Luckily I ended up implementing a project but so I didn't throw it away BUT it was a very suboptimal process.
My process was to look for general ways to improve the memory usage. I spent time looking at the existing tools that our org created, as well as existing tools that are avialble in the industry. Arguably I spent too much time also trying to understand the intricancies of how the OS uses the memory.

A sister team was already working on a project to detect how much memory we're using and they told me that there was a regression recently and that was an opportunity for me. In particular they said that their tool can detect the regressions but once the regression happens, they don't know why it happened and helping with that would be super helpful. My manager at the time organized a meeting to talk about it and confirm it with the sister team's manager that this is an opportunity indeed. NOTE: I wouldn't have organized this meeting myself at the time.

So I took a look at that regression and tried to figure out what was the problem and if I can make a tool that would help with it. It took a while and I did it.
The issue was that it felt like I was competing with the person from the regression-causing project. That person was independently trying to figure out the regression causes and we were coming to similar conclussions (sort of a proof that I was on the right track), but that person knew more details, which is not surprising. What I should have done is approact the person and try to understand what they were doing to understand the regression and talked to them about what would have helped them in the process.

I also got in a situation where some people from the sister team opposed some of the changes I did because they thought my changes were not performant enough. The conversations with that person were often leading to nowhere, and even though I finally found a way to make them happy it felt like a lot of time was wasted.

Another thing I pushed for in the end was to try to replace the existing industry-standard tool with my script. This seemed like a good way to make the whole tooling more performant (which was raised as an issue), and also seemed like a good technical challenge for me. It turned out it wasn't possible to do it for various reasons. One good thing I did here is that because of the time pressure I spent a day or two trying to figure out if this was even possible as opposed to trying to spend weeks to do it. I confirmed with the MT owner that this is not even needed, so this felt like a god thing - I spent myself a lot of time to avoid doing something that wasn't even needed. This made me realize that I could have probably saved a lot more time if I confirmed other aspects with different people. 

Lastly, the results of this project were shown in a particular UI. Even though we were measuring the memory of a process it turned out the different processes were grouped in some logical ways and we were showing them as a part of the group, and this group-level memory usage was what everyone looked at. So even though my addition was able to track down memory break down per process, it didn't end up being shown in the tool that everyone used. Conclusion: I should have understood the whole process of how the sister's team project was used much better before I even started writing any code. Then I would have known much better what changes would be useful for the end user, 

Also, I was depending on the sister's team to integrate my script into their tool, as well as integrate this into the UI. Both of these drastically prolonged the project! I think this could have been made better by (1) selling the tool much better to the sister's team. They were aware I was working on it but if I asked them for timelines/resources and/or communicated to them more often they would have seen this as more important. (2) changing their code directly. People don't like if someone changes their code, but I could have probably asked to change their code and add these changes myself! Talking to the sister's team's management and the prople who own the tool would have helped with that. One important thing I learned is that you either ask for some official way for you to depend on them (for example, if they accept to do a well defined project in company's goal planning), so that you can hold them accountable, even publicly if needed (it shouldn't come to that ever though but you have a reason to nudge them), or to ask them to let you contribute to their project, and then you agree on how to do it (code style or design docs or whatever).


What is the process I should have done?
- Started with the sister team's project and asked them what it does and if they see any room for improvements (maybe they already knew very well that once the regression happens they know that it't not clear what to do about it)
- Learned the whole set of features that the tool is doing and how the regressions end up in the UI - this is where I would have learned about the single process vs process group.
- Talk to the users and those that had to fix the regressions. This is where I would have learned what they are looking for with the improvements. Maybe the regressions don't happen that often at all?
- After completing the info from above I would have known what the requirements are and then I could have talked to the sister team about implementing this and how they're going to help me or if they're going to help me at all.

The issue here is also how to focus your time. Also people don't want to talk to you that often so how do you learn the most by not wasting people's time, but also by not spending weeks on your own trying to understand something.



I didn't:
- confirm with the users of this project that my improvement would be needed or useful
- confirm with the owners of the main project that my idea is useful
- optimize the work for final outcome as opposed to optimize it for technical complexity
- Make sure I don't depend on others.


Question for Novakovic:
How much time should I spend uderstanding my team's responsibilities and my org's responsibilities,
like what the VP/Director is responsible for?