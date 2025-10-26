---
created: 2025-08-20
---
# Book

```base
views:
  - type: table
    name: Table
    filters:
      and:
        - source.contains(this.file.name)
    order:
      - file.name
      - author
    columnSize:
      file.name: 556

```