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