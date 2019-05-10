import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { addPostAPI } from '../../actions/post';
import { connect } from 'react-redux';

class CreatePost extends Component {
  state = { title: '', body: '', author: '', category: '' };

  handleFormChange = (event, state) => {
    this.setState({ [state]: event.target.value });
  }

  handleSubmit = () => {
    const { ...post } = this.state;
    this.props.addPost(post);
    this.handleCleanInputs();
  }

  handleCleanInputs = () => {
    this.setState({ title: '', body: '', author: '', category: '' });
  }

  validateInputs = () => {
    const { title, body, author, category } = this.state;
    return title !== '' && body !== '' && author !== '' && category !== '';
  };

  render(){
    return(
      <div className="d-flex justify-content-center m-4 p-3">
        <form onSubmit={this.handleSubmit} className="form-style form-width bg-white shadow-lg">
          <legend className="text-dark">Criar Post</legend>
          <fieldset className="form-group">
            <input type="text" value={this.state.title} onChange={(e) => this.handleFormChange(e, "title")}
              placeholder="Título" className="form-control mb-1"/>
            <textarea value={this.state.post} onChange={(e) => this.handleFormChange(e, "body")}
              placeholder="Post" className="form-control"/>
          </fieldset>
          <fieldset>
            <div className="row mb-2">
              <div className="col-6">
                <input type="text" value={this.state.author} onChange={(e) => this.handleFormChange(e, "author")}
                  placeholder="Autor" className="form-control form-control-sm mb-1"/>
              </div>
              <div className="col-6">
                <select value={this.state.category  } onChange={(e) => this.handleFormChange(e, "category")}
                  className="form-control form-control-sm">
                  <option value="tomate1">Tomate1</option>
                  <option value="tomate2">Tomate2</option>
                  <option value="tomate3">Tomate3</option>
                </select>
              </div>
            </div>
          </fieldset>
          <input type="submit" value="Submit" className="btn btn-lg bg-main w-100"/>
        </form>
      </div>
    )
  }
}

CreatePost.propTypes = {
  onChange: PropTypes.func
};

export default connect(null, { addPost: post => addPostAPI(post),})(CreatePost);
