import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './layout/Main';
import Popup from './components/Popup';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Header/>
        <Main/>
        <Footer/>
        <Popup/>
      </div>
    );
  }
}

export default App;
