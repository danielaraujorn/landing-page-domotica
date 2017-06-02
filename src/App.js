import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import logo from './logo.svg';
import Typist from 'react-typist';
import Exibicao from './demonstracao'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
class App extends Component {
  render() {
    return (
      <div id="fullpage">
        <div style={{backgroundColor:"#006064"}} className="section " id="section0">
          <img src={logo} style={{width:"90px",marginBottom:-20}} alt="saiot" />
          <Typist
            avgTypingSpeed={10}
            startDelay={500}>
            <h1 style={{color:"white",marginBottom:-10,fontSize:"5.5em"}}>Saiot</h1>
            <p style={{fontSize:15, color:"white"}}>smart automation using iot</p>
          </Typist>
        </div>
        <div style={{backgroundColor:"#eee"}} className="section" id="section1">
          <h1 style={{color:"#006064",marginBottom:40,fontSize:"4em"}}>Controle tudo!</h1>
          <Exibicao />
        </div>
        <div style={{backgroundColor:"#00f"}} className="section " id="section2">
          <h1 style={{color:"#008"}}>B</h1>
        </div>
      </div>
    );
  }
}

export default App;
