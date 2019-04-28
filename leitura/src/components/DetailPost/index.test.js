import React from 'react';
import { mount } from 'enzyme';
import DetailPost from '../DetailPost'


describe('Test DetailPost component', () => {
  let wrapper;
  beforeEach(()=> { wrapper = mount(<DetailPost />)})

  it('renders a detailed post', () => {
    expect(wrapper.find('.post-details')).toHaveLength(1);    
  })

  it('renders post comments', () => {
    expect(wrapper.find('.comments')).toHaveLength(1);    
  })
})




// deve ter um controle para adicionar um novo comentário
// implemente o formulário de comentários da forma que quiser (em linha, modal, etc.)
