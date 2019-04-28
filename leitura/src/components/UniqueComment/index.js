import React from 'react';
import './styles.css';

const UniqueComment = () => {
  return(
    <div className="card comment shadow-sm text-main text-left px-4 m-1">
      <div className="d-flex justify-content-between pt-2 mt-2">
        <h6 className="font-weight-bold">Autor</h6>
        <div className="d-flex font-14">
          <i className="fas fa-edit mr-3"></i><i className="far fa-trash-alt"></i>
        </div>
      </div>
      <p className="card-text font-14 text-justify text-second mb-1">
      Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <div className="d-flex justify-content-between">
        <div className="font-14">
          <span className="post-votes mr-4">6 votos</span>
          <i className="far fa-thumbs-up mr-2"></i>
          <i className ="far fa-thumbs-down"></i>
        </div>  
        <p className="font-12 mb-3">21/09/1999</p>
      </div>
    </div>
  )
}

export default UniqueComment;