const low = require('lowdb')
const fileAsync = require("lowdb/lib/storages/file-async")
const db = low("db/data.json", {
  storage: fileAsync
})
