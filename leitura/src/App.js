import React from 'react';
import './App.css';
import WrapPlatform from './components/WrapPlatform'
import CreatePost from './components/CreatePost'
import DetailPost from './components/DetailPost'
import { Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Route exact path="/create" component={CreatePost} />
      <Route exact path="/" component={WrapPlatform} />
      <Route exact path="/category/:category" component={WrapPlatform} />
      <Route exact path="/category/:category/post" component={DetailPost} />
      <Footer />
    </div>
  );
}

export default App;
