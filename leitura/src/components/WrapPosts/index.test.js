import React from 'react';
import { mount } from 'enzyme';
import WrapPosts from '../WrapPosts'


describe('Test WrapPosts component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<WrapPosts />)})

  it('renders a wrap-posts', () => {
    expect(wrapper.find('.wrap-cards')).toHaveLength(1);    
  })
})
