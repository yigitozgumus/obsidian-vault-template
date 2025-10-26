---
created: 2025-08-20
---
# Video

```base
views:
  - type: table
    name: Table
    filters:
      and:
        - source.contains(this.file.name)
    order:
      - file.name
      - url
    columnSize:
      file.name: 614

```