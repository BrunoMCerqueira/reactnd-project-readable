import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="pt-2">
    <div className="row pt-3">
      <div className="col-2">
      <Link to="/">
        <span className="align-bottom">SwanTalks</span>
        <img className="brand" src="https://img.icons8.com/metro/26/000000/origami.png" alt="swan icon"></img>
      </Link>
      </div>
      <div className="col-8">
        <h1 className="text-center font-weight-bold">Readable</h1>
      </div>
    </div>
  </header>
)

export default Header;