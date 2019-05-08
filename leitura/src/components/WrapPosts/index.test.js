import React from 'react';
import { shallow } from 'enzyme';
import WrapPosts from '../WrapPosts';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from '../../reducer';

const store = createStore(reducer, applyMiddleware(thunk));

describe('Test WrapPosts component', () => {
  it('renders a wrap-posts and list posts', async () => {
    const response = {
      posts: [{
        author: "thingone",
        body: "Just kidding. It takes more than 10 minutes to learn technology.",
        category: "redux",
        commentCount: 0,
        deleted: false,
        id: "6ni6ok3ym7mf1p33lnez",
        timestamp: 1468479767190,
        title: "Learn Redux in 10 minutes!",
        voteScore: -5,
      }, {
        author: "thingone",
        body: "Just kidding. It takes more than 10 minutes to learn technology.",
        category: "redux",
        commentCount: 0,
        deleted: false,
        id: "6ni6ok3ym7mf1p33lnez",
        timestamp: 1468479767190,
        title: "Learn Redux in 10 minutes!",
        voteScore: -5,
      }]
    }
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => (response),
    }));

    let wrapper = await shallow(<Provider store={store}><WrapPosts /></Provider>);
    setTimeout(async () => {
      await wrapper.update();
      expect(wrapper.find('.wrap-cards')).toHaveLength(1);
      expect(wrapper.find('.card')).toHaveLength(2);
    })
  })
})
