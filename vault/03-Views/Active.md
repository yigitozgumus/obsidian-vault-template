# Active

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
      - created
    columnSize:
      file.name: 528
      note.type: 207

```