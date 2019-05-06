import React from 'react';
import './styles.css';

class UniquePost extends React.Component {
  render () {
    const { post } = this.props;
    return(
      <div className="card shadow-sm text-main m-1">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="font-16 card-title font-weight-bold text-left mb-1 mr-1">{ post.title }</h5>
            <div className="d-flex font-16">
              <i className="fas fa-edit mr-3"></i><i className="far fa-trash-alt"></i>
            </div>
          </div>
          <p className="font-12 text-left mb-2">
            <span>{ post.author }</span> - <span>{ post.timestamp }</span> * <span>{ post.category }</span>
          </p>
          <p className="card-text text-second text-justify font-14 mb-2">{ post.body }</p>
          <div className="d-flex justify-content-between font-14">
            <div className="">
              <span className="post-votes mr-4">{ post.voteScore } votos</span>
              <i className="far fa-thumbs-up mr-2"></i>
              <i className ="far fa-thumbs-down"></i>
            </div>  
            <p className="mb-0">0 Comentários</p>
          </div>
        </div>
      </div>
    )
  }
}

export default UniquePost;