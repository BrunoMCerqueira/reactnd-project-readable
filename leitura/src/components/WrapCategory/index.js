import React, { Component } from 'react';
import './styles.css';

class WrapCategory extends Component {
  render(){
    return(
      <header>
        <div className="row p-3">
          <div className="col-2">
            <span className="align-bottom">SwanTalks</span>
            <img className="brand" src="https://img.icons8.com/metro/26/000000/origami.png" alt="swan icon"></img>
          </div>
          <div className="col-8">
            <h1 className="text-center">Categorias</h1>
          </div>
        </div>
        <nav>
          <ol className="d-flex justify-content-center">
            <li>Tomates</li>
            <li>Tomates</li>
            <li>Tomates</li>
          </ol>
        </nav>
      </header>
    )
  }
}

export default WrapCategory;