import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

class WrapCategory extends Component {
  render(){
    return(
      <nav>
        <ol className="d-flex justify-content-center font-weight-bolder">
        {/* <Link to={`/category/${category.path}`}>{category.name}</Link> */}
          <li>Tomates</li>
          <li>Tomates</li>
          <li>Tomates</li>
        </ol>
      </nav>
    )
  }
}

export default WrapCategory;