import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">锦城快递</h1>
        </header>
        <p className="App-intro">
          两个功能-- 一个是duty calculate && 另一个是VIP的抓取
          <code>src/App.js</code> 
        </p>
      </div>
    );
  }
}

export default App;
