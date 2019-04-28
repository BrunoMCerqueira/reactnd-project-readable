import React, { Component } from 'react';
import './styles.css';
import WrapCategory from '../WrapCategory';
import WrapCards from '../WrapCards';
import { Link } from 'react-router-dom';


class WrapPlatform extends Component {
  render(){
    return (
      <main>
        <WrapCategory />
        <div className="font-30 mb-2 d-flex justify-content-center">
          <Link to="/create" className="d-flex">
            <span className="font-20 font-weight-bolder mr-2">Adicionar post </span> <i className="fas fa-plus"></i>
          </Link>
        </div>
        <WrapCards />
      </main>
    )
  }
}

export default WrapPlatform;