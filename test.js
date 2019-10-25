import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import App from './client/app.jsx'

const request = require('supertest')
const app = require('./server/index.js');


xdescribe('Test the root path: Integration test', () => {


  test('It should return product information from both collections', (done)=> {
    request(app)
    .get('/description?prod_id=0')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(res.body[0].item_number).toBe(res.body[1].item_number);
      done()
    })
  });

  test('It should return a respones 200 to GET request', (done) => {
    request(app)
    .get('/description?prod_id=0')
    .expect('Content-Type', /json/)
    .then((res) => {
      expect(200)
      done()
    })
  });
});



describe('Testing App component from app.jsx', () => {

  test('it should render without errors', () => {
    const component = shallow(<App />);
    const wrapper = component.find(`[data-test='default']`);
    expect(wrapper.length).toBe(1)
  })

  it('it should render describe tab', () => {
    const component = shallow(<App />);
    component.setState({data:[{},{}]})
    const wrapper = component.find(`[data-test='description']`)
    expect(wrapper.length).toBe(1);
  });

  it('it should render shipping and payment tab', () => {
    const component = shallow(<App />);
    component.setState({data:[{},{}]})
    component.setState({page: 1})
    const wrapper = component.find(`[data-test='ship_pay']`)
    expect(wrapper.length).toBe(1);
  })

});