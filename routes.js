const router = require('express').Router()

router.get('/', function (req, res) {
  res.send('Hello')
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
