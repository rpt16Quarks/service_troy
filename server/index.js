const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
cosnt app = express();

app.use(express.static('public'))

app.listen(3005);

