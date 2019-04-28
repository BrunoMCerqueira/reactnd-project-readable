import React from 'react';
import { mount } from 'enzyme';
import WrapPlatform from '../WrapPlatform'
import { MemoryRouter } from 'react-router-dom';

describe('Test WrapPlatform component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<MemoryRouter><WrapPlatform /></MemoryRouter>)})

  it('renders a nav', () => {
    expect(wrapper.find('nav')).toHaveLength(1);    
  })

  it('renders a plus to add posts', () => {
    expect(wrapper.find('.fa-plus')).toHaveLength(1);
  })
})

