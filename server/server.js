require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const db = require('./db/connection')
const PORT = process.env.PORT || 3333
// import routes
// middleware
app.use(express.json())
app.use(cookieParser())
// ensure the db is open/start the server
db.once('open', () => {
    // start express
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  });