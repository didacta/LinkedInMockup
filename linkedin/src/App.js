import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftRail from './components/LeftRail.js';
import CenterRail from './components/CenterRail.js';
import RightRail from './components/RightRail';

class App extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Linked-In</h1>
        </header> <LeftRail />
        <CenterRail />
        <RightRail/>
        <p className="App-intro">
         
        </p>

      </div>
    );
  }
}

export default App;
