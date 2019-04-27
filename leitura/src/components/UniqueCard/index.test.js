import React from 'react';
import { mount } from 'enzyme';
import UniqueCard from '../UniqueCard'


describe('Test UniqueCard component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<UniqueCard />)})

  it('renders a card', () => {
    expect(wrapper.find('.card')).toHaveLength(1);   
    expect(wrapper.find('.card-body')).toHaveLength(1);   
    expect(wrapper.find('.card-title')).toHaveLength(1);   
    expect(wrapper.find('.card-text')).toHaveLength(1);   
    expect(wrapper.find('.card-data')).toHaveLength(1);   
  })
})
