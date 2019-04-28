import React from 'react';
import './styles.css';

const UniquePost = () => {
  return(
    <div className="card shadow-sm text-main m-1">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="font-16 card-title font-weight-bold mb-1">Card title</h5>
          <div className="d-flex font-14">
            <i className="fas fa-edit mr-3"></i><i className="far fa-trash-alt"></i>
          </div>
        </div>
        <p className="font-12 text-left mb-1">
          <span>Autor</span> - <span>21/01/1999</span> * <span>categoria</span>
        </p>
        <p className="card-text text-second text-justify font-14 mb-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="d-flex justify-content-between font-14">
          <div className="">
            <span className="post-votes mr-4">6 votos</span>
            <i className="far fa-thumbs-up mr-2"></i>
            <i className ="far fa-thumbs-down"></i>
          </div>  
          <p className="mb-0">0 Comentários</p>
        </div>
      </div>
    </div>
  )
}

export default UniquePost;