import React from 'react';
import { mount } from 'enzyme';
import CreatePost from '../CreatePost'


describe('Test CreatePost component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<CreatePost />)})

  it('renders a form', () => {
    expect(wrapper.find('form')).toHaveLength(1);    
  })
})
