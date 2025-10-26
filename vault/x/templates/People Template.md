---
tags:
  - track/people
birthday: 
org: []
created: <%tp.date.now()%>
---
## Notes

## Meetings


```base
filters:
  and:
    - file.hasTag("work/meeting")
    - file.hasLink(this.file.name)
properties:
  file.name:
    displayName: Meeting
views:
  - type: table
    name: Table
    order:
      - file.name
      - date
    sort:
      - property: file.name
        direction: DESC
      - property: date
        direction: DESC
    columnSize:
      file.name: 704

```

## Interactions