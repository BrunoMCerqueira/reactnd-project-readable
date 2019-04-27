import React from 'react';
import { mount } from 'enzyme';
import WrapCategory from '../WrapCategory'


describe('Test WrapCategory component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<WrapCategory />)})

  it('renders a nav', () => {
    expect(wrapper.find('nav')).toHaveLength(1);
    expect(wrapper.find('ol')).toHaveLength(1);    
  })

  it('renders nav options', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  })

  
})