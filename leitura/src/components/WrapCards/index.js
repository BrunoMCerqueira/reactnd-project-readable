import React, { Component } from 'react';
import UniqueCard from '../UniqueCard';
import './styles.css';

class WrapCards extends Component {
  render(){
    return(
      <div className="row wrap-cards">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniqueCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniqueCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniqueCard />
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <UniqueCard />
        </div>
      </div>
    )
  }
}

export default WrapCards;