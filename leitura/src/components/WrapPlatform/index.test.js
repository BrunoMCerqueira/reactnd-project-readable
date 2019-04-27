import React from 'react';
import { mount } from 'enzyme';
import WrapPlatform from '../WrapPlatform'


describe('Test WrapPlatform component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<WrapPlatform />)})

  it('renders a nav', () => {
    expect(wrapper.find('nav')).toHaveLength(1);    
  })

  it('renders a form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  })
})

