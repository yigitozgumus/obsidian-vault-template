<%*
let title = tp.file.title
-%>---
created: <% tp.date.now() %>
linked-to: "[[<% tp.date.now("YYYY-MM-DD") %>]]"
---

# Project: <%* tR += `${title}` %>


> [!summary]- Log
> ```dataviewjs 
> const fileName = dv.current()?.file?.name 
> dv.taskList( 
> 	dv.pages("[[#]]") 
> 	.file.lists 
> 	.where(l => l.outlinks?.some(o => o.display === 
> 	fileName) || l.section.subpath === fileName) 
> 	.flatMap(l => l.section.subpath === fileName ? [l] : 
> 	l.children) 
> 	.groupBy(l => l.link) 
> 	.sort(g => g, "desc") 
> )
> ```

## Context

## Resources

## Tasks