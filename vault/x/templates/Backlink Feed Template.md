```dataviewjs 
const fileName = dv.current()?.file?.name 
dv.taskList( 
	dv.pages("[[#]]") 
	.file.lists 
	.where(l => l.outlinks?.some(o => o.display === 
	fileName) || l.section.subpath === fileName) 
	.flatMap(l => l.section.subpath === fileName ? [l] : 
	l.children) 
	.groupBy(l => l.link) 
	.sort(g => g, "desc") 
)
```
