variable "token" {
  type    = string
  default = getenv("AUTH_TOKEN")
}

variable "url" {
  type = string
  default = getenv("DB_URL")
}

env "turso" {
  url     = "${var.url}?authToken=${var.token}"
  exclude = ["_litestream*"]
}
