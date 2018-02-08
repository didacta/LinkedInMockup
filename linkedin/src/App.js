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
          <h1 className="App-title">Linked</h1>
          <img src={logo} className="App-logo" alt="logo" />


          <p className="App-intro">

          </p>
        </header><input type="text" placeholder="Search"></input> <LeftRail />
        <CenterRail />
        <RightRail />
      </div>
    );
  }
}

export default App;
