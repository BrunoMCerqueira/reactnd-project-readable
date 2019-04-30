import React, { Component } from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MessageModal extends Component {
  state = { body: '', author: '' };

  handleSubmit = () => console.log('as');

  handleFormChange = (event, state) => {
    this.setState({ [state]: event.target.value });
  }
  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="message-modal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content text-main">
            <div className="modal-header">
              <h5 className="modal-title">Comentário</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleSubmit} className="">
              <div className="modal-body">
                <input type="text" value={this.state.author} onChange={(e) => this.handleFormChange(e, "author")}
                  placeholder="Autor" className="form-control mb-1"/>
                <input type="text" value={this.state.body} onChange={(e) => this.handleFormChange(e, "body")}
                  placeholder="Comentário" className="form-control mb-1"/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <input type="submit" value="Comentar" className="btn bg-main"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

MessageModal.propTypes = {
  onChange: PropTypes.func
};

function Modal(props) {
  return ReactDOM.createPortal(<MessageModal/>, document.querySelector("#modal"));
}


export default Modal;