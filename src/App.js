import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Reactor!</h2>
        </div>
        <p className="App-intro">
          Let's try some REACT!
        </p>
      </div>
    );
  }
}

export default App;
