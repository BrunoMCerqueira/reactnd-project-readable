import React from 'react';
import { mount } from 'enzyme';
import CreatePost from '../CreatePost';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from '../../reducer';

const store = createStore(reducer, applyMiddleware(thunk));



describe('Test CreatePost component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<Provider store={store}><CreatePost /></Provider>)})

  it('renders a form with a textarea, select and button', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(1);
    expect(wrapper.find('.btn')).toHaveLength(1);
  })

  it('clean inputs after form submit', () => {
    // wrapper.setState({ title: 'titulo', body: 'cuerpo', author: 'autor', category: 'categoria' }, () => {
    //   wrapper.update();
    //   const form = wrapper.find('form');
    //   expect(wrapper.find('input').at(0).text()).toEqual('aa');
    //   form.simulate('submit');
    // });
  })
})
