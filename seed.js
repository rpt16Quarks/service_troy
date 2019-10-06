const mongoose = require('mongoose');
const Promise = require('bluebird');
const faker = require('faker');

mongoose.connect('mongodb://localhost/description', {useUnifiedTopology: true, useNewUrlParser: true}).catch(err => console.log(err))

var Schema = mongoose.Schema;

var description = new Schema({
  item_number: Number,
  list_date: Date,
  item_Spec: {
    condition: String,
    brand: String,
    year: Number,
    type: String,
    size: Number,
    packaging: String,
    rec_age: String,
    material: String,
    upc: Number
  },
  seller_msg: {
    prod_des: String,
    item_des: String,
    img_url: String
  }
})

var ship_pay = new Schema ({
  item_number: Number,
  ship_handling: {
    item_location: String,
    ship_to: String,
    ship_excludes: String,
    qty: Number
  },
  shipping_cost: {
    price: Number,
    region:String,
    service: String,
    est_time: String
  },
  return_policy: {
    exist: Boolean,
    deadline: Number,
    type: String,
    pay_shipping: String
  }
})