import React from 'react';
import './App.css';
import WrapPlatform from './components/WrapPlatform'
import CreatePost from './components/CreatePost'
import DetailPost from './components/DetailPost'
import { Route, Switch } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Modal from './components/shared/MessageModal';
const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal');
document.body.append(modalRoot);

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Switch>
        <Route exact path="/create" component={CreatePost} />
        <Route exact path="/" component={WrapPlatform} />
        <Route exact path="/category/:category" component={WrapPlatform} />
        <Route exact path="/category/:category/post" component={DetailPost} />
      </Switch>
      <Footer />
      <Modal/>
    </div>
  );
}

export default App;
