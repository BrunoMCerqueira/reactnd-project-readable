import React, { Component } from 'react';
import './styles.css';

class CreatePost extends Component {
  render(){
    return(
      <div className="card shadow-sm m-1">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle text-muted">Author</h6>
          </div>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between card-data">
            <span>03/02/1984</span>
            <span>Voto</span>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost;