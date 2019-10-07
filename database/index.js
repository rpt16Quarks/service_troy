const mongoose = require('mongoose');
const Promise = require('bluebird');
const description = require('./schema.js');
const ship_pay = require('./schema.js')

mongoose.connect('mongodb://localhost/description', {useUnifiedTopology: true, useNewUrlParser: true}).catch(err => console.log(err))

var Schema = mongoose.Schema;
var Product = mongoose.model('Product', description);
var Purchase = mongoose.model('Purchase', ship_pay)

let query = (cb) => {
  let item = Math.floor(Math.random() * 11);
  let prodInfo = [];
  queryProd(item, (err,res) => {
    if (err) {
      cb(err)
    } else {
      prodInfo.push(res)
      queryTran(item, (err, res) => {
        if (err) {
          cb(err)
        } else {
          console.log('line 70',res)
          prodInfo.push(res);
          cb(null, prodInfo)
        }
      });
    }
  });
}

let queryProd = (itemNum,cb) => {
  Product.findOne({'item_number':itemNum}, (err,res) => {
    if (err) {
      cb(err)
    } else {
      cb(null,res)
    }
  })
}

let queryTran = (itemNum,cb) => {
  Purchase.findOne({'item_number': itemNum}, (err,res) => {
      if (err) {
        cb(err)
      } else {
        cb(null,res)
      }
  })
}

module.exports = {
  query,
  queryProd,
  queryTran
}