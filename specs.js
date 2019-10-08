//const query = require('./database/index.js');
import * as query from "./database/index.js"
jest.mock("./database/index.js")

//unit test query fn, calls other query fn mock 2 fn
test('query should call each collections query fn', () => {

})

//unit test query fn return an array of 2 obj-mock 2 fn and res
test('query fn should return array with 2 results', () => {

})
//Integration test- call api and get array of 2 obj-no mocks
test('should return all data for item when api called', ()=> {

})