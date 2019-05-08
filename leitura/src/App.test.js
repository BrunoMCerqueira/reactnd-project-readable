import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><MemoryRouter><App /></MemoryRouter></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
