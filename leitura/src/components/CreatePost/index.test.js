import React from 'react';
import { mount } from 'enzyme';
import CreatePost from '../CreatePost'


describe('Test CreatePost component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<CreatePost />)})

  it('renders a form with a textarea, select and button', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(1);
    expect(wrapper.find('.btn')).toHaveLength(1);
  })
})
