import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import WrapPlatform from './components/WrapPlatform'
import CreatePost from './components/CreatePost'
import DetailPost from './components/DetailPost'
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Modal from './components/shared/MessageModal';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.append(modalRoot);

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Switch>
          <Route key="all-posts" exact path="/" render={(props) => (<WrapPlatform {...props} />)} />
          <Route exact path="/create" component={CreatePost} />
          <Route key="posts-by-category" exact path="/category/:category" render={(props) => (<WrapPlatform {...props} />)} />
          <Route exact path="/category/:category/post" component={DetailPost} />
        </Switch>
        <Footer />
        <Modal/>
      </div>
    );
  }
}

export default App;
