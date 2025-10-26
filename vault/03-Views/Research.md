# Research

```base
views:
  - type: table
    name: Table
    filters:
      and:
        - type.contains(this.file.name)
    order:
      - file.name
      - type
    columnSize:
      file.name: 638

```
