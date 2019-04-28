import React from 'react';
import './App.css';
import WrapPlatform from './components/WrapPlatform'
import CreatePost from './components/CreatePost'
import { Route } from 'react-router-dom';
import Header from './components/shared/Header';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/" component={WrapPlatform} />
      <Route exact path="/category/:category" component={WrapPlatform} />
    </div>
  );
}

export default App;
