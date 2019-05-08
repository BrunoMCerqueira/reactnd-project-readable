import React from 'react';
import { shallow } from 'enzyme';
import WrapCategory from '../WrapCategory'
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from '../../reducer';

const store = createStore(reducer, applyMiddleware(thunk));

describe('Test WrapCategory component', () => {
  it('renders nav options', async () => {
    const response = {
      categories: [
        {name: "react", path: "react"},
        {name: "redux", path: "redux"},
        {name: "udacity", path: "udacity"}
      ]
    };

    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => (response),
    }));

    let wrapper = await shallow(<Provider store={store}><WrapCategory /></Provider>);

    setTimeout(async () => {
      await wrapper.update();
      expect(wrapper.find('nav')).toHaveLength(1);
      expect(wrapper.find('ol')).toHaveLength(1);    
      expect(wrapper.find('li')).toHaveLength(3);
    })
  })
})
