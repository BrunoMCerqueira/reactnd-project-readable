import React, { Component } from 'react';
import './styles.css';
import UniqueComment from '../UniqueComment';

class DetailPost extends Component {
  
  render() {
    return (
      <>
        <div className="post-details">
          <h2 className="">Post title</h2>
          <div className="d-flex justify-content-between">
            <div>
              <span>Autor</span>
              <span>03/02/1984</span>
            </div>
            <div>
              <span>Apagar</span>
              <span>Editar</span>
            </div>
          </div>
          <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="">
            <span className="text-muted">Voto</span>
          </div>
        </div>
        <div className="comments">
          
        </div>
      </>
    )
  }
}

export default DetailPost;
