import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";
import logo from "./logo.svg";
import Typist from "react-typist";
import Exibicao from "./demonstracao";
import Historico from "./historico";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div id="fullpage">
        <div
          style={{ backgroundColor: "#006064" }}
          className="section section0"
        >
          <img
            src={logo}
            style={{ width: "90px", marginBottom: -20 }}
            alt="saiot"
          />
          <Typist avgTypingSpeed={10} startDelay={500}>
            <h1
              style={{ color: "white", marginBottom: -10, fontSize: "5.5em" }}
            >
              Saiot
            </h1>
            <p style={{ fontSize: 15, color: "white" }}>
              smart automation using iot
            </p>
          </Typist>
        </div>
        <div style={{ backgroundColor: "#006064" }} className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-4">
                <img
                  src={logo}
                  style={{ maxHeight: 25, width: "100%" }}
                  alt="saiot"
                />
                <h2 style={{ fontSize: 20, color: "white" }}>algo aqui</h2>
                <p style={{ fontSize: 12, color: "white" }}>
                  asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                  aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                  asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas dpoijbn
                  asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug asodhbsa asd
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src={logo}
                  style={{ maxHeight: 25, width: "100%" }}
                  alt="saiot"
                />
                <h2 style={{ fontSize: 20, color: "white" }}>algo aqui</h2>
                <p style={{ fontSize: 12, color: "white" }}>
                  asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                  aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                  asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas dpoijbn
                  asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug asodhbsa asd
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "#eee" }}
          className="section"
          id="section1"
        >
          <Exibicao />
        </div>
        <div
          style={{ backgroundColor: "#006064" }}
          className="section section0"
        >
          <Historico />
        </div>
      </div>
    );
  }
}

export default App;
