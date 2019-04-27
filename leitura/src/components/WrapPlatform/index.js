import React, { Component } from 'react';
import './styles.css';
import WrapCategory from '../WrapCategory';
import WrapCards from '../WrapCards';
import CreatePost from '../CreatePost';

class WrapPlatform extends Component {
  render(){
    return (
      <main>
        <WrapCategory />
        <WrapCards />
        <CreatePost />
      </main>
    )
  }
}

export default WrapPlatform;