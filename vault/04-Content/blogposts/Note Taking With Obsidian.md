---
title: Note Taking with Obsidian
assetPrefix: obsidian
publishDate: 2025-10-27
draft: true
external: false
seriesId:
label:
url:
tags:
  - blogpost/note-taking
  - blogpost/productivity
  - blogpost/habits
cover: "[[obsidian-header.png]]"
status: "[[Active]]"
type:
  - "[[Writing]]"
---
Writing this post was always at the back of my mind. The reason for my procrastination is that even though I got out of the shiny app syndrome and been using the same app for nearly 4 years (It is [Obsidian](https://obsidian.md/)), I was still experimenting how I would take my notes. This was due to the fact the there are limitations in the tool I use, and I didn't want any compromise. 

For the last couple of months however, my approach stayed consistent. But the above introduction paragraph stayed the same. What helped me to complete this post was a gentle nudge from [Dogancan](https://x.com/dogancna/status/1980175064739012641), so thanks dude.

Disclaimer: This post is a bit long, focused on a niche topic, and quite opinionated. It reflects what works for me. Feel free to take what resonates and leave what doesn’t.

## Why

I've written separate blog post as to [why you should write and what can you write besides code](https://www.yigitozgumus.com/writing/what-can-software-engineers-write-besides-code/). The reasons in that blogpost still stands. I still believe that note-taking helps me:
- Slow down my thinking
- Close open loops in the normal work day
- Notice small things 

We all take notes in one way or another. Note taking doesn't have to be complicated or you don't have to use a specific tool. My main requirement was that the solution I will land on must be in digital form. Because to me, organizing and maintaining physical notebooks after a while becomes a nuisance rather than something I enjoy doing.

Markdown is a format that I've been using for almost 12 years. Keeping things offline and relying on simple text files made sense to me. They are easily portable and accessible, easy to store and can be version controlled. 

 I've changed a lot of how I take notes since I started using [Obsidian](https://obsidian.md/), and landed on a good structure that I can easily follow. Most importantly, there is nothing scheduled. Note taking relies on my own pace, even If I decide to stop writing for couple of weeks, I could easily go back and there is nothing to review, update or keep track on. They are just files. 

Let's begin.
## Folder Structure

Obsidian calls the folder of your notes your `Vault`. I keep a relatively simple folder structure. There is no nested folders except for 2 of them. I add new folders only when I **reaaally** need to. 

![[obsidian-folders.png]]

Numbers are there just to ensure that folders are ordered. Let's start from the top.

`00-Inbox` is where I create new notes, I occasionally review and either move to its designated area, or delete them from the vault. Sometimes too many notes piled up in the Inbox so I use a View Note called `In Progress Notes` in the top level of the vault. That gives me a better bird's eye view than the sidebar.

![[obsidian-inprogress.png]]

`00-Notes` is the main notes area. Almost anything goes here. `01-Sources` keeps the external information. I save some of the articles I would like to revisit again using [Obsidian Web Clipper](https://obsidian.md/clipper). There are also Book notes, Videos and all sorts of information. I keep a note called `Sources` to query this folder using [Obsidian's Bases feature](http://help.obsidian.md/bases).

![[obsidian-sources.png]]

`02-Calendar` keeps all of the time related notes like daily, weekly, monthly, quarterly etc. The most frequent one I create are the daily notes. Others come and go. 

`03-Views` keeps all of the files that uses Bases Feature. I could keep these in the notes folder as well. But keeping them in a folder makes the search a bit easier due to the folder as a prefix.

`04-Content` is one of two folders that has nested folders. Here, I keep all of the content I've created, including all of the writings for my website. I use a CLI program called [Lazydraft](https://github.com/yigitozgumus/lazydraft) which I developed myself to make transition between my Obsidian Vault and Personal Website repository as seamless as possible. With its dashboard feature, I can see how It would look like in my website as I type. Also all of the assets I use are automatically transferred. If you want to learn how I built it, [I wrote a series of posts](https://www.yigitozgumus.com/series/lazydraft/).

<Tweet id ="https://x.com/yigitozgumus/status/1870942282029072576"/>

`05-Drawings` keeps all of the non-text notes like Excalidraw and Canvas. `06-Tasks` keeps all of the task notes which we will delve deep in the next section. `x` is the central maintenance area. It keeps the assets, templates and some scripts I use for the automation.

## Properties

I observed that as the number of notes in my vault grew, Keeping specialized folders becomes a bit hard to maintain. To filter, differentiate and categorize the notes, I use a simple tagging method I developed. 

Each note I create regardless of their type contains 3 front-matter properties. You don't have to fill them. But if you do, they are there. These are `source` , `type` and `status`. 

- **Source** represents the source type of the note if applicable: *Article*, *Video*, *Book*, *Tweet*, *Video* etc.
- **Type** represents the purpose of the note: *Task*, *Work Project*, *Writing*, _Research_, _Personal Project_ etc.
- **Status** represent the current status of that note. These are *Waiting*, *Active*, *Cancelled*, *Idea*, *Completed* . I mainly use this for tasks but they are applicable to anything. A book note I am still reading can be _Waiting_, or I might have decided to _Cancel_ the writing I've been thinking about writing.

To make their usage easier, I use a note template which has all of these properties. (Weird looking syntax belongs to [Templater plugin](https://github.com/SilentVoid13/Templater))

```markdown
<%*
let title = tp.file.title
-%>---
created: <% tp.date.now() %>
source:
type:
status:
related:
link: 
---
# <%* tR += `${title}` %>

<%tp.file.cursor()%>
```

Since almost every note has this properties, I could easily create query pages for each of them. This makes it really easy to see what types of things are "Active", or "Waiting" in my vault. 
## Daily Notes

I've landed on a much simpler Daily note template now. When I create one, It's just adding the current that in a readable manner. I used to add bunch of subheadings here or even tried a method where number of daily notes are fixed and you sort of use them through the years. So 01-01 can contain entries from 2023, 2024 and so on. It was an interesting experiment but it made referencing from other notes really hard. 

I use daily notes mainly to  keep a daily log of what I do during my work. It is practice called [Interstitial Journalling](https://betterhumans.pub/replace-your-to-do-list-with-interstitial-journaling-to-increase-productivity-4e43109d15ef) . Basically you just write what you are working on, what bothers you, what is blocking you and how you solved that problem.

It is a rubber duck but in a markdown format. If you know, you know.

![[obsidian-interstitial.png]]

There are couple of small template shortcuts that makes easier to insert time stamp. Other than that the format is just what it needs to be that day. Also, a neat small automation I've added using [Quick-add](https://github.com/chhoumann/quickadd) plugin is to link the notes I want to the current daily note. When I want to create another note but keep some form of reference in the daily note, I use this. 

![[obsidian-note-add.gif]]

## Meetings 

Keeping track of the important meetings using just notes is also relatively easy. There are downsides to what information can you keep in a single markdown document. But they can just contain the relevant excel link or other external information if you want to. 

If you create a note for the people you have meetings with, than it is really easy to aggregate all of the meetings for that person using Bases plugin.

![[obsidian-meetings.png]]

I customized the Meeting template since I use it quite often. When I create a new one, it asks me the meeting date, and I can answer it using natural language. This way I can create meeting notes ahead of time easily to prepare for it or add resources if I need to. 

Here is my current meeting template:

```markdown
<%*
let date = await tp.user.promptAndParseNaturalLanguageDate(tp)
let title = tp.file.title
if (title.startsWith("Untitled")) {title = await tp.system.prompt("Title");}
let formattedTitle = `${date} - ${title}`
await tp.file.rename(formattedTitle)
-%>---
date: <%* tR += `${date}` %>
created: <% tp.date.now()%>
org:
people: []
related: 
tags:
- work/meeting
---
# <%* tR += `${formattedTitle}` %>
---

## Agenda

## Notes
```

## Tasks?

Not all of my tasks, but over time, I find that I don't need to access all of my tasks from my phone, so they can be in text form. Keeping tasks inside my notes also makes referencing other material and creating resource documents out of them relatively easier. 

This area however is still a work in progress and I think it is not easy to maintain your tasks by manually creating notes all by yourself. My approach changed after I started to use [TaskNotes plugin](https://github.com/callumalpass/tasknotes).

This plugin handles all of the note creation and gives you a nice UI inside obsidian to manage your tasks. Also, task management is done via properties. That gives me flexibility and ease of update. There is nothing *not-markdowny*  stuff added to my notes.  

You have a calendar where you can see what is scheduled, and also a Kanban board where you can see a bird's eye view of your TODO List. You can define projects as tasks (again, they are just notes), and assign subtasks to these projects if you want. At their core, task notes also use `status` property to track their progress (This one is configurable, I've added it). So in theory, any note in my vault can become a task. 

Writing this blogpost was a long overdue task in my vault for example.

![[obsidian-kanban.png]]

## System

I have sort of a system for taking notes but It is not a flow, or a process you have to follow. **Certain things should be tracked in certain files**, that is the only rule. Some of these: 

- Things I'd like to remember about the things at Work goes to Work Highlights
- There are more general *Things I did in 2025* type of notes where I summarize each month
- I occasionally check *In Progress Notes* to keep my inbox at bay.
- Work goals are mentioned when needed to see my progress on them. They can also become a Task.

If my work becomes too hectic, reviewing daily notes and distilling the information can become time consuming. When that happens, I use the simple prompts below to summarize my week into a weekly note. Weekly note title contains the date interval. So LLM knows which notes it has to look 

![[obsidian-weekly.png]]

## Bonus

I haven't mentioned but you can also:

- Use [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) inside Obsidian. Think of it like the offline version. If you want, it is possible to directly copy paste the content to the website version.
- Use a tool like [Slidev](https://sli.dev/) for presentations. It is based on Markdown files so you are in a familiar environment. Since you are in your notes, you can use LLM's to create the scaffold and transfer your notes into slides.

## Considerations

- Obsidian is very customizable. **Very**. It is easy to turn your focus to building a beatiful note writing environment with a wide selection of themes and plugins. Don't fall in to the rabbit hole. Add things to your system as you need.
- I've talked about bunch of things here. Its purpose is to show you what works for me. It is much better for you to start from scratch considering your own needs.

If you read all of these and you are keen to try out this system using the things I mentioned, very well. I got you. Here is my vault with its keybindings, shortcuts and plugins. You can download it and use it like your own, or you can pick what you like and add it to your vault. 