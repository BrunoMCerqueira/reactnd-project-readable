import React from 'react';
import { mount } from 'enzyme';
import WrapPlatform from '../WrapPlatform'
import { MemoryRouter } from 'react-router-dom';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from '../../reducer';

const store = createStore(reducer, applyMiddleware(thunk));

describe('Test WrapPlatform component', () => {
  const match = { params: { category: 'react' } }
  let wrapper;
  beforeEach(()=> { wrapper = mount(<Provider store={store}><MemoryRouter><WrapPlatform match={match} /></MemoryRouter></Provider>)})

  it('renders a nav', () => {
    expect(wrapper.find('nav')).toHaveLength(1);    
  })

  it('renders a plus to add posts', () => {
    expect(wrapper.find('.fa-plus')).toHaveLength(1);
  })
})
