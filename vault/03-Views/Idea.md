# Idea

```base
views:
  - type: table
    name: Table
    filters:
      and:
        - status.contains(this.file.name)
    order:
      - file.name
      - type
    columnSize:
      file.name: 638

```