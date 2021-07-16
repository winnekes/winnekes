# How to Get Started with Contributing to Open Source 

## Or: Please don't do what I did to get started with open-source contribution!

I love TypeScript, and have loved it since I was first introduced to it in my [coding bootcamp](https://codaisseur.com) and now refuse to go back to plain old JavaScript. I love it for the safety and predictability, and when done right, the self-documenting nature of strong types.

At my previous job, I wanted a way to create a living handbook for new interns to quickly test and learn new things. I found [ITypeScript](https://github.com/winnekes/itypescript), a kernel for [Jupyter Notebook](https://jupyter.org/), and played around with it. I was happy that it worked right out of the box. 

I was learning a lot of new things at the time and when I saw that the project owner was looking for a new maintainer, I made a spur-of-the-moment decision to request, and accept the role. Perhaps if I had looked a bit deeper, I wouldn't have been so quick to accept ownership.

It was overwhelming. The documentation was lacking, the project was a minimal fork of the JavaScript kernel, and there were various issues reported by users. I let the project sit for a couple of months as I was unsure of how to approach it.

In the meantime, I had worked on different projects, both professionally and in my free time and had built my skills up. With the confidence that gave me, about two weeks ago I decided to get over my fear of failure and dive into the ITypeScript library. I went through the code line by line to understand how the implementation of a custom kernel for Jupyter Notebook works.

It all seemed much simpler now, and I noticed that there was something useful I could already do. I decided to update all the dependencies in the library to their latest versions. Vulnerabilities in outdated packages are a serious matter, and new features are a definite added bonus.

I tested the code, updated a few more files, reached out to the original author for permission to publish a new version to NPM, and released an updated version to the world! With it came a sense of relief to have finally started working on this daunting project. 

**But if I had to do it again now, I would have done things differently.**

![I should have prepared better](https://media3.giphy.com/media/jxzEhHBMmH7tm/giphy.gif?cid=ecf05e47elzyraf91aq99fbq1hbi7pjwl087qcneq1k4wmeb&rid=giphy.gif&ct=g)



### But First - Why Everyone, Junior or Senior, Should Contribute to Open Source Projects 

Contributing to open source comes with a lot of benefits and it really does not matter how experienced you are. **I'd wager that the lesser experience you have the more value you get out of it for your career and personal development!**

Knowledge and learning comes with a lot of practice over several years. But as an aspiring developer it is almost impossible to get real-life experience before your first job. There's only so much that mock projects, tutorials, and making To-Do apps can teach you. Unless you have a dedicated mentor, it is difficult to get professional feedback on the quality of your code and execution.

Contributing to an open-source project is the real deal! You will learn how to work with an existing codebase (often a massive one), you will get feedback from experienced developers in the form of code reviews, and you will (hopefully) learn industry practices and standards along the way.

When interviewing for a junior role, candidates fresh out of university with a Computer Science degree are often asked questions about computer theory or thesis projects. Interviewing when you don't have that background, or some professional experience, can be difficult for both you and the interviewer. In lieu of professional work experience, contribution to open source will help you stand out. You conversations with potential employers can now be shaped around awesome topics that you enjoy and contribute to.

You also start building your very own network of peers and mentors early on, maybe even before your first role in development. Who knows, you might come across someone who will warmly recommend you in their own network!

### There Are Many Ways That One Can Contribute to Open Source

![Ooof](https://i.imgur.com/0Mgv9Mz.gif)

Contributing to a project for the first time can feel overwhelming. Big companies with real projects might depend on the software, industry veterans might judge your code, and every issue can seem way above your skill level. Don't let any of those thoughts dissuade you from participating in this awesome process — contribution comes in different forms, some of them don't even include writing a single line of code!

**There are many other ways to help:**

- [Participate in discussions, you might know the solution to an issue](https://github.com/chakra-ui/chakra-ui/discussions/2169)
- [Build and share a new example for the project with the owners or the community, especially if they already collect examples](https://github.com/tensorflow/examples)
- [Provide a translation in your native language](https://crowdin.com/project/openproject)
- [Fix typos in comments or documentation](https://yihui.org/en/2013/06/fix-typo-in-documentation/)
- [Test the project, and report bugs and provide feedback](https://github.com/supabase/supabase/issues/2205)
- [Improve or offer to write documentation for the project if writing is one of your stronger suits](https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/) 
- [Create your very own open source project](https://fossbytes.com/linus-torvaldss-famous-email-first-linux-announcement/)



Some of these are easier than others — go with your gut here, and listen to the community's wishes. 

### An Opinionated Checklist Before You Contribute

![You better check your list, twice](https://media.giphy.com/media/4xWGyVKoXqg2eVCiq9/giphy.gif)

Jumping straight into coding is acceptable for hackathons, quick-and-dirty hacks, and proof of concepts. But there are many steps to consider before you start working on an open-source project. For one, you are no longer working alone but collaborating with other developers; every project has its own mission and vision, and guidelines on how to contribute. The last thing you want is to be stuck with an inactive or even dead-end project where your contribution adds no value.

It is very easy to get overwhelmed at the sheer complexity of some projects. It is best to not look at those right away but to choose a small-scale project with an active userbase.

The important items on my checklist now are:

- **License**: the project **must** have an [open-source license](https://opensource.org/licenses). If it does not then the project is not open-source and you are legally not allowed to use, copy or modify said project. A license protects both contributors and users of the project.
- **Read the guidelines**: in the docs you will usually find proper details on how to [contribute](https://github.com/github/docs/blob/main/CONTRIBUTING.md) and the possible [code of conduct](https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md). Make sure to read it thoroughly before contributing and remember, the guidelines can vastly differ from project to project. Some projects do not accept  pull requests before an issue is raised and discussed, or there is a proper structure required when you report bugs. Again, **don't waste your own time**, read up!
- **Check the general "health" of the project**: 
  - Is the project active and maintained? Don't start your open-source journey by contributing to inactive projects. As a beginner you need quick and constructive feedback.
  - Is the community welcoming and open? I judge this quality by going through the issues and reading the responses of the maintainers/contributors critically. Reading up on code reviews and how feedback is given is very insightful as well! 
  - Is the code structure clear to you? 
  - Are there standards for submitting issues, reporting bugs, and pull requests?
- **Do you have experience with the main language/tech stack?** Learning on the go is never a bad thing, but I believe you should know some of the technologies used in the project before you start contributing.  Best practices can vastly differ from language to language. The more experienced you are in the tech stack, the more confident you can be in your PR, and the easier it might be for others to review your work.

### How to Select a Project for Your First Contribution

One way to find a project to work on is to look to the tools you are already using in your own projects. For example, do you use [TypeORM](https://github.com/typeorm/typeorm) and are you frustrated that there is no easy way of adding scopes to your general queries? I am! [And so are a few others when I was looking for an existing issue](https://github.com/typeorm/typeorm/issues/1601). So I'll take a crack at it whenever time permits.

Most contributions stem from a feeling of frustration about bugs or lack of features the contributors feel are necessary to make a project even more awesome.

So go through the issues of your favourite library or framework, participate in the discussions with the community, and maybe come up with a solution to a problem you feel like you can handle. :muscle:

And, if you are not using it, you are unlikely to contribute effectively in the long term, either due to lack of understanding what the project is all about or lack of interest after some time.

If you don't have a certain project in mind but want to get started anyway, here are a couple of  gateways into your first open-source contribution:

- [First Contributions](https://github.com/firstcontributions/first-contributions)
  - This is is an tutorial on how to contribute to an open source project. The awesome thing is that when you complete the tutorial you will have made your first open source contribution!

- [Good First Issue](https://goodfirstissue.dev) or [Up For Grabs](https://up-for-grabs.net) 
  - You'll find curated issues for aspiring contributors to tackle from popular open-source projects.

  - You can search and filter by difficulty and language.

---

**However, there are other ways to contribute to the community, not just through open-source projects.** 

You can ask and answer questions on platforms such as Stack Overflow or Quora, join discussions in Discord or IRC channels that are run by the maintainers of the project, and organise or participate in Meetups about technologies.

I'm still at the start of my open-source journey, and this was a brief overview of my experience and understanding. I would love to hear from you if you want a more in-depth look at certain aspects of open-source contribution! I would also love to hear about your first open-source adventure! 

Happy hacking!
