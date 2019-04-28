import React from 'react';
import { mount } from 'enzyme';
import UniquePost from '../UniquePost'


describe('Test UniquePost component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<UniquePost />)})

  it('renders a card', () => {
    expect(wrapper.find('.card')).toHaveLength(1);   
    expect(wrapper.find('.card-body')).toHaveLength(1);   
    expect(wrapper.find('.card-title')).toHaveLength(1);   
    expect(wrapper.find('.card-text')).toHaveLength(1);   
    expect(wrapper.find('.card-data')).toHaveLength(1);   
  })
})
