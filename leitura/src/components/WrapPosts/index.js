import React, { Component } from 'react';
import UniquePost from '../UniquePost';
import './styles.css';

class WrapPosts extends Component {
  render(){
    return(
      <div className="row wrap-cards">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniquePost />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniquePost />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniquePost />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniquePost />
        </div>
      </div>
    )
  }
}

export default WrapPosts;