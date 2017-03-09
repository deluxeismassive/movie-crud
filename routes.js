const express = require('express')
const router = require('express').Router()
const low = require('lowdb')
const fileAsync = require("lowdb/lib/storages/file-async")
const path = require('path')
const db = low("db/db.json", {
  storage: fileAsync
})

router.get('/movies', (req, res) => {
  const movies = db.get('movies')
  res.json(movies)
})

router.get('/movies/:id', (req, res) => {
  const movieId = req.params.id
  const movie = db.get('movies').find({id: movieId})
  res.send(movie)
})

router.delete('/movies/:id', (req, res) => {
  db.get('movies')
    .remove({ 'id': req.params.id })
    .write()
    .then(() => {
      res.sendStatus(204)
    })
})

router.put('/movies/:id', (req, res) => {
  db.get('movies')
    .find({ 'id': parseInt(req.params.id) })
    .assign(req.body)
    .write()
    .then(() => {
      res.sendStatus(204)
    })
  console.log('Yippe');
})

router.post('/movies', (req, res) => {
  db.get('movies')
    .push(req.body)
    .write()
    .then(() => {
      res.sendStatus(204)
    })
  console.log('Yippe');
})

router.get('/edit/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/edit.html'))
})

router.get('/show/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/show.html'))
})

router.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/new.html'))
})

module.exports = router
