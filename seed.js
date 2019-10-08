const mongoose = require('mongoose');
const Promise = require('bluebird');
const faker = require('faker');
const description = require('./database/schema.js');
const ship_pay = require('./database/schema.js');

mongoose.connect('mongodb://localhost/description', {useUnifiedTopology: true, useNewUrlParser: true}).catch(err => console.log(err))

var Schema = mongoose.Schema;
var Product = mongoose.model('Product', description);
var Purchase = mongoose.model('Purchase', ship_pay)

let seed = () => {
  let clear = dropdb()
  let random = randomProduct()
  let data = [];
  let transaction = [];
  for(let i =0; i < 10; i++) {
    let currProd = {
      item_number: i,
      list_date: faker.date.recent(),
      item_Spec: {
        condition: faker.lorem.word(),
        brand: random[0],
        type: random[1],
        packaging: random[2],
        material: random[3],
        rec_age: random[4],
        char_family: random[5],
        manfactured: random[6],
        era: random[7],
        year: random[8],
        size: random[9],
        upc: random[10]
      },
      seller_msg: {
        prod_des: faker.lorem.paragraphs(),
        item_des: faker.lorem.sentence(),
        img_url: faker.image.image()
      }
    }
    data.push(currProd)

    let currtran = {
      item_number: i,
      ship_handling: {
        item_location: faker.address.state(),
        ship_to: faker.address.country(),
        ship_excludes: faker.address.country(),
        qty: faker.random.number()
      },
      shipping_cost: {
        price: faker.commerce.price(),
        region:faker.address.country(),
        service: faker.lorem.words(),
        est_time: faker.date.future()
      },
      exist: faker.random.boolean(),
      deadline: faker.random.number(),
      type: faker.lorem.words(),
      pay_shipping: faker.lorem.words()
    }
    transaction.push(currtran)
  }
  addDocuments(data,Product)
  addDocuments(transaction, Purchase)
}

let addDocuments = (array,mod) => {
  mod.collection.insertMany(array, (err,docs) => {
    if (err) {
      return console.log(err)
    } else {
      console.log('Multiple documents added to collection')
    }
  })
}

let dropdb = () => {
  Product.collection.drop()
    .then(res => console.log(res))
    .catch(err => console.log(err))

    Purchase.collection.drop()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

let randomProduct = () => {
  let array = [];
  for (let i = 0; i <= 10; i++) {
    let exist = Math.floor(Math.random() * 2)
    if (exist) {
      if (i <= 7 ) {
        let str = faker.lorem.words();
        array.push(str)
      } else {
        let val = faker.random.number();
        array.push(val)
      }
    } else {
      array.push('')
    }
  }
  return array
}

seed()

module.exports = {
  Product,
  Purchase
}