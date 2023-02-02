const express = require('express');
const routes = express.Router();

let db = [
  { '1' : { name: 'Cliente 1', age: '20'} },
  { '2' : { name: 'Cliente 2', age: '20'} },
  { '3' : { name: 'Cliente 3', age: '20'} }
]

// Search data
routes.get('/', (req, res) => {
  return res.json(db)
})

// Insert data
routes.post('/add', (req, res) => {
  const body = req.body

  if (!body) 
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
  const id = req.params.id

  let newDB = db.filter(item => {
    if (!item[id])
    return item
  })

  db = newDB

  return res.send(newDB)
})

module.exports = routes