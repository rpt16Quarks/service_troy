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
    type: String,
    packaging: String,
    material: String,
    rec_age: String,
    char_family: String,
    manfactured: String,
    era: String,
    year: Number,
    size: Number,
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
});

var Product = mongoose.model('Product', description);
var Purchase = mongoose.model('Purchase', ship_pay)

let seed = () => {
  let clear = dropdb()
  let random = randomProduct()
  let data = []
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
  }
  Product.collection.insertMany(data,(err,docs) => {
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
    let exist = Math.floor(Math.random() * Math.floor(2))
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