const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/description', {useUnifiedTopology: true, useNewUrlParser: true}).catch(err => console.log(err))




module.export = {
  query
}