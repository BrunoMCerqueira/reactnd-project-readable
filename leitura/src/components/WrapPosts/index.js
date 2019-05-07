import React, { Component } from 'react';
import UniquePost from '../UniquePost';
import './styles.css';
import { postsAPI, postsWithCategoryAPI } from '../../actions/post';
import { connect } from 'react-redux';

class WrapPosts extends Component {
  componentDidMount() {
    const { category } = this.props;
    if(category) {
      // this.props.getPostsWithCategory(category);
    } else {
      this.props.getPosts();
    }
  }

  render(){
    const { posts } = this.props;
    return(
      <div className="row wrap-cards">
        { posts.map((post, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <UniquePost post={post} Key={index}/>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { getPosts: postsAPI })(WrapPosts);