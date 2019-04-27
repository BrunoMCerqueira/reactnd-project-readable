import React, { Component } from 'react';
import UniqueCard from '../UniqueCard';
import './styles.css';

class WrapCards extends Component {
  render(){
    return(
      <div className="row wrap-cards">
        <div className="col-3">
          <UniqueCard />
        </div>
        <div className="col-3">
          <UniqueCard />
        </div>
        <div className="col-3">
          <UniqueCard />
        </div>
        <div className="col-3">
          <UniqueCard />
        </div>
      </div>
    )
  }
}

export default WrapCards;