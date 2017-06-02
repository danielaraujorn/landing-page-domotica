import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Typist from 'react-typist';

class App extends Component {
  render() {
    return (
      <div id="fullpage">
        <div style={{backgroundColor:"#006064"}} className="section " id="section0">
          <img src={logo} style={{width:"90px",marginBottom:-10}} alt="saiot" />
          <Typist
            avgTypingSpeed={10}
            startDelay={1000}>
            <h1 style={{color:"white",marginBottom:-10}}>Saiot</h1>
            <p style={{fontSize:15, color:"white"}}>smart automation using iot</p>
          </Typist>
        </div>
        <div style={{backgroundColor:"#0f0"}} className="section" id="section1">
          <h1 style={{color:"#080"}}>G</h1>
        </div>
        <div style={{backgroundColor:"#00f"}} className="section " id="section2">
          <h1 style={{color:"#008"}}>B</h1>
        </div>
      </div>
    );
  }
}

export default App;
