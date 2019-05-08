import React from 'react';
import { mount } from 'enzyme';
import UniquePost from '../UniquePost'


describe('Test UniquePost component', () => {
  let wrapper;
  const post = {
    author: "thingone",
    body: "Just kidding. It takes more than 10 minutes to learn technology.",
    category: "redux",
    commentCount: 0,
    deleted: false,
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    title: "Learn Redux in 10 minutes!",
    voteScore: -5,
  }

  beforeEach(()=> { wrapper = mount(<UniquePost post={post} />)})

  it('renders a card', () => {
    expect(wrapper.find('.card')).toHaveLength(1);
    expect(wrapper.find('.card-body')).toHaveLength(1);
    expect(wrapper.find('.card-title')).toHaveLength(1);
    expect(wrapper.find('.card-text')).toHaveLength(1);
  })
})
