const router = require('express').Router()
const low = require('lowdb')
const fileAsync = require("lowdb/lib/storages/file-async")
const db = low("db/data.json", {
  storage: fileAsync
}) 

router.get('/', function (req, res) {
  res.send('hello world')
})

router.delete('/:id', function (req, res) {

})

router.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body)
})

router.get('/:id', function (req, res) {

})

router.patch('/:id', function (req, res) {

})

module.exports = router
