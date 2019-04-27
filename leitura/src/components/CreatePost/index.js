import React, { Component } from 'react';
import './styles.css';

class CreatePost extends Component {
  state = { title: '', post: '', author: '', category: 'tomate1' };

  handleFormChange = (event, state) => {
    this.setState({ [state]: event.target.value });
  }

  handleSubmit = () => {
    console.log('saving data!')
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="form-style form-width bg-white shadow-lg">
        <legend className="text-dark">Criar Post</legend>
        <fieldset className="form-group">
          <input type="text" value={this.state.title} onChange={(e) => this.handleFormChange(e, "title")}
            placeholder="Título" className="form-control mb-1"/>
          <textarea value={this.state.post} onChange={(e) => this.handleFormChange(e, "post")}
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

        <input type="submit" value="Submit" className="btn btn-lg text-white bg-main w-100"/>

      </form>
    )
  }
}

export default CreatePost;