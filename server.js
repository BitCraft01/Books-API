//Depenndencies
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')


//Configuration
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI


//Controllers and Routes
app.use(express.json())
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)
app.use(cors())


app.get('/', (req, res) => {
  res.send('Welcome, ye old Bookworm')
})

app.get('books/:id', (req, res, next) => {
  res.json({ msg: "This is CORS-enabled for all origins"})
})

app.get('*', (req, res) => {
    res.send('Page not found, 404')
})

//Connection Listens
app.listen(process.env.PORT, () => {
  console.log(`Listening to ${PORT}`)
})