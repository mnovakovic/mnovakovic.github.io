---
layout: post
head-extra: favico.html
title:  "Start with the user and business needs"
date:   2022-03-18 12:00:00 -0800
categories: thoughts
---

My job as a software engineer is to make software that users find valuable and that fits the business needs.
Even though this sounds simple and obvious, it is hard to remember it once you get really deep inside the
complex code and intricate implementation details of the software you're working on.
It's especially hard to understand this when you're just starting out.

## Solving the wrong problem: the neverending refactoring tasks

Early in my engineering career, I found [refactoring](https://martinfowler.com/books/refactoring.html) to be the most exciting type of work.
I was given some code that was perceived as terribly designed and I was going to make it so much better.
Unfortunately, this massive improvement that I always hoped for rarely happened - I would often leave the code
in a worse state than I found it, and I didn't understand why.

I had this issue often during my first job. I would get excited about a refactoring task,
but I would spend endless days changing and "improving" the code.
I would add another abstraction layer, try to use another design pattern, add support for
another potential use case, and it was a never-ending process.
It was often frustrating as I would realize that the new potential future use case I was
adding support for means I have to refactor everything from scratch.
In other words - I spent so much time trying to solve problems that didn't even exist!

This resulted in overly complex code that didn't work well for the
use cases the company needs, and I was way behind schedule.
This wasted time and results were always hard to justify to my boss but also to myself;
The lack of a justifiable answer is another issue I'll write about later.

## Solution: optimize for the user and business needs

It took me a while to realize that the solution couldn't be simpler: *optimize for the user and business needs*.
I wish I knew this little trick back then.
I was refactoring to support whatever potential use case I creatively came up with
instead of making it solve the problems I was paid to solve.
The solution with this approach is easier, and it makes everyone happier.
It's a win-win.

Having this sort of pressure of real-world constraints, business value, and customer requirements is a blessing.
I don't even have to think about the constraints: they are literally given to me by the forces outside of my control,
which are the ones that will use the software.

As I grow in my career, I can see this pattern become more and more important.
The software is always designed to solve a real-world problem and a business need.
The solutions evolve as the business requirements change.
Good software design doesn't come from understanding the software itself, it comes from understanding the business requirements and the value it
brings to the business.
That is a little unintuitive, as in school, as well in the first few years at work you're completely
focused on the technology and code, not on the bigger picture that software fits in.

I know some schools and computer science programs are incorporating this real-world and user-driven mindset
in their curriculum, and that produces better engineers in my experience. I hope every school starts following those steps soon
so students become much better prepared for the workforce.