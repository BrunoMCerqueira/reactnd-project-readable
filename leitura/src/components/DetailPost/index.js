import React, { Component } from 'react';
import './styles.css';
import UniqueComment from '../UniqueComment';

class DetailPost extends Component {
  
  render() {
    return (
      <div className="col-md-8 offset-md-2 mb-5">
        <div className="post-details bg-white text-dark rounded text-left m-3 p-3">
          <div className="d-flex justify-content-between m-4">
            <h2>Post title</h2>
            <div className="d-flex align-items-center">
              <i className="fas fa-edit mr-3"></i><i className="far fa-trash-alt"></i>
            </div>
          </div>
          <p className="m-4">
            <span>03/02/1984</span> - <span className="font-weight-bolder">Autor</span>
          </p>
          <p className="text-justify m-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-between m-4">
            <div>
              <span className="post-votes mr-4">6 votos</span>
              <i className="far fa-thumbs-up mr-2"></i>
              <i className="far fa-thumbs-down"></i>
            </div>
            <p>1 Comentário</p>
          </div>
        </div>
        <h5 className=" text-left font-18 mt-5">Comentários</h5>
        <div className="comments">
          <UniqueComment />
          <UniqueComment />
        </div>
      </div>
    )
  }
}

export default DetailPost;
