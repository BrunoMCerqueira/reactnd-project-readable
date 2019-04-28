import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header'
import { MemoryRouter } from 'react-router-dom';

describe('Test Header component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<MemoryRouter><Header /></MemoryRouter>)})

  it('renders a header with h1', () => {
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  })

  it('renders a link to initial page', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  })
})