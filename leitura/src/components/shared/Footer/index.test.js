import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('Test Footer component', () => {
  it('render the web author', () => {
    let wrapper = shallow(<Footer />);
    expect(wrapper.find('.fixed-bottom')).toHaveLength(1);  
    expect(wrapper.find('.fa-heart')).toHaveLength(1);
  })
})