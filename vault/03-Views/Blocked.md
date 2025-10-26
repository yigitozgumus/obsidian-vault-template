# Blocked

```base
views:
  - type: table
    name: Table
    filters:
      and:
        - status.contains(this.file.name)

```