import React from 'react';
import { mount } from 'enzyme';
import DetailPost from '../DetailPost'


describe('Test DetailPost component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<DetailPost />)})

  it('renders a detailed post', () => {
    expect(wrapper.find('.post-details')).toHaveLength(1);    
  })

  it('renders icons to delete and edit post', () => {
    expect(wrapper.find('.post-details .fa-edit')).toHaveLength(1);
    expect(wrapper.find('.post-details .fa-trash-alt')).toHaveLength(1);
  })

  it('renders post votes', () => {
    expect(wrapper.find('.post-details .post-votes')).toHaveLength(1);    
  })

  it('renders post comments', () => {
    expect(wrapper.find('.comments')).toHaveLength(1);    
  })

  it('renders a button to comment', () => {
    expect(wrapper.find('.bg-main')).toHaveLength(1);    
  })
})

// deve ter um controle para adicionar um novo comentário
// implemente o formulário de comentários da forma que quiser (em linha, modal, etc.)
