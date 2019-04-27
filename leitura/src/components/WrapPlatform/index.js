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
        <div className="d-flex justify-content-center m-4 p-3">
          <CreatePost />
        </div>
      </main>
    )
  }
}

export default WrapPlatform;