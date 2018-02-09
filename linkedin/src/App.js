import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/icon.js';
import './components/icon.css';
import home from './home.png';
import jobs from './jobs.png';
import network from './network.png';
import messaging from './messaging.png';
import notifications from './notifications.png';
import user from './user.png';
import LeftRail from './components/LeftRail.js';
import CenterRail from './components/CenterRail.js';
import RightRail from './components/RightRail';

class App extends Component {
  render() {
    return (
      <div>
        <ul className="Nav">
          <div className="App-header">
            <h1 className="App-title">Linked</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="end">

            <input type="text" placeholder="Search"></input>
          </div>
          <div className="icons">
            <li><Icon source={home} alt="Home" /></li>
            <li><Icon source={network} alt="Network" /></li>
            <li><Icon source={jobs} alt="Jobs" /></li>
            <li><Icon source={messaging}alt="Messaging"/></li>
            <li><Icon source={notifications} alt="Notifications" /></li>
            <li><Icon source={user} alt="User" /></li>
          </div>

        </ul>
        <div className="Rails">
        <LeftRail />
        <CenterRail />
        <RightRail />

      </div>
      </div>
    );
  }
}

export default App;
