import React from 'react';
import { mount } from 'enzyme';
import WrapCards from '../WrapCards'


describe('Test WrapCards component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<WrapCards />)})

  it('renders a wrap-cards', () => {
    expect(wrapper.find('.wrap-cards')).toHaveLength(1);    
  })
})
