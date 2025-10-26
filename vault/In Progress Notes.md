---
created: 2025-03-21
---
# Currently in Progress notes

```base
filters:
  and:
    - file.inFolder("00-Inbox")
properties:
  file.name:
    displayName: Name
views:
  - type: table
    name: Default view
    order:
      - file.name
    sort:
      - property: file.ctime
        direction: DESC

```
