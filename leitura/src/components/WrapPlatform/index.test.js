import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import WrapPlatform from '../WrapPlatform'


describe('Test WrapPlatform component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<WrapPlatform />)})

  it('renders without crashing', () => {
    const main = document.createElement('main');
    ReactDOM.render(<WrapPlatform />, main);
    ReactDOM.unmountComponentAtNode(main);
  });

})

