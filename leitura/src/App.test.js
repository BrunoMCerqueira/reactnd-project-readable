import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';
import WrapPlatform from './components/WrapPlatform'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ', ()=> {
  let wrapper = mount(<WrapPlatform />);
  expect(wrapper.find('main')).toHaveLength(1);
})
