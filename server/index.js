const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();

app.use(express.static('public'))

app.get('/description/1', (req,res) => {
  db.query((err,data) => {
    if(err) {
      res.send(err)
    } else (
      res.send(data)
    )
  })
})

app.listen(3005);

