table "keepup" {
  schema = schema.main
  column "uid" {
    null           = false
    type           = integer
    auto_increment = true
  }
  column "task" {
    null = true
    type = text
  }
  column "task_state" {
    null    = true
    type    = bool
    default = true
  }
  primary_key {
    columns = [column.uid]
  }
}
schema "main" {
}
