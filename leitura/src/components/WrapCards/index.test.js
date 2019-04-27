import React from 'react';
import { mount } from 'enzyme';
import WrapCards from '../WrapCards'


describe('Test WrapCards component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<WrapCards />)})

  it('renders a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);    
  })
})
