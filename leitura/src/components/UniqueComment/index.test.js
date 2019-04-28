import React from 'react';
import { mount } from 'enzyme';
import UniqueComment from '../UniqueComment'


describe('Test UniqueComment component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<UniqueComment />)})

  it('renders a comment', () => {
    expect(wrapper.find('.comment')).toHaveLength(1);    
  })
})
