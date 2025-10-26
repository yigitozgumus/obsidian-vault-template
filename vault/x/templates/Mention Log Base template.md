> [!summary]- Log
> ```dataviewjs
> const searchTerm = "<%tp.file.title%>";
>
> const pages = dv.pages('""')
>     .where(p => p.file.lists.some(list =>
>         list.outlinks?.some(link => link.display === searchTerm) ||
>         list.children?.some(child =>
>             child.outlinks?.some(link => link.display === searchTerm)
>         )
>     ));
>
> const results = pages.flatMap(page =>
>     page.file.lists
>         .filter(list => {
>             const hasLinkInSelf = list.outlinks?.some(link =>
>                 link.display === searchTerm
>             );
>
>             const hasLinkInChildren = list.children?.some(child =>
>                 child.outlinks?.some(link =>
>                     link.display === searchTerm
>                 )
>             );
>
>             return hasLinkInSelf || hasLinkInChildren;
>         })
>         .map(list => ({
>             source: dv.fileLink(list.path, false, list.path.split('/').pop()),
>             date: list.text,
>             content: list.children
>         }))
> );
>
> let output = "";
> for (const result of results) {
>     output += `- From ${result.source}\n`;
>     output += `  - ${result.date}\n`;
>
>     for (const child of result.content) {
>         output += `    - ${child.text}\n`;
>         if (child.children) {
>             for (const nested of child.children) {
>                 output += `      - ${nested.text}\n`;
>             }
>         }
>     }
>     output += "\n";
> }
>
> dv.paragraph(output);
> ```
