import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";
import logo from "./logo.svg";
import Exibicao from "./demonstracao";
import Historico from "./historico";
import injectTapEventPlugin from "react-tap-event-plugin";
import mobile from "./mobile.png";
injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <div id="fullpage">
        <div
          style={{ backgroundColor: "#006064" }}
          className="section section0"
        >
          <div className="logoInicial">
            <img src={logo} alt="saiot" />
            <h2>Saiot</h2>
          </div>
          <div className="container">
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{ textAlign: "right" }}
                className="hidden-xs hidden-sm col-md-6"
              >
                <img
                  className="fadeIn"
                  style={{ maxWidth: "45%" }}
                  src={mobile}
                  alt="saiot"
                />
              </div>
              <div
                style={{ textAlign: "left", paddingRight: 40 }}
                className="col-md-4"
              >
                <h1
                  className="fadeIn"
                  style={{ color: "#FFFB", fontSize: "4em", margin: 0 }}
                >
                  O <strong style={{ color: "#fff" }}>controle</strong> na palma
                  da sua mão
                </h1>
                <p
                  className="fadeIn"
                  style={{
                    margin: 0,
                    marginBottom: 15,
                    color: "#02a2b1",
                    fontSize: "1.5em"
                  }}
                >
                  automação inteligente com análise e tomadas de decisão
                </p>
                <a
                  href="#descrição"
                  style={{
                    backgroundColor: "#ff4b22",
                    color: "#FFF",
                    fontSize: "1.5em",
                    marginRight: 10
                  }}
                  className="btn fadeIn"
                >
                  Ler mais
                </a>
                <a
                  href="http://saiot.ect.ufrn.br"
                  style={{
                    backgroundColor: "#ff4b22",
                    color: "#FFF",
                    fontSize: "1.5em"
                  }}
                  className="btn fadeIn"
                >
                  Ir pro sistema
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <div className="row" style={{ paddingTop: 25, paddingBottom: 25 }}>
              <div
                className="col-md-4"
                style={{ paddingTop: 15, paddingBottom: 15 }}
              >
                <img
                  src={logo}
                  style={{ maxHeight: 25, width: "100%" }}
                  alt="saiot"
                />
                <div style={{ padding: "0 20px" }}>
                  <h2 style={{ fontSize: 20, color: "white" }}>
                    Análise de dados
                  </h2>
                  <p style={{ fontSize: 12, color: "white" }}>
                    asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                    aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                    asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas dpoijbn
                    asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug asodhbsa
                    asd
                  </p>
                </div>
              </div>
              <div
                className="col-md-4"
                style={{ paddingTop: 15, paddingBottom: 15 }}
              >
                <img
                  src={logo}
                  style={{ maxHeight: 25, width: "100%" }}
                  alt="saiot"
                />
                <div style={{ padding: "0 20px" }}>
                  <h2 style={{ fontSize: 20, color: "white" }}>Comunidade</h2>
                  <p style={{ fontSize: 12, color: "white" }}>
                    asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                    aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                    asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas dpoijbn
                    asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug asodhbsa
                    asd
                  </p>
                </div>
              </div>
              <div
                className="col-md-4"
                style={{ paddingTop: 15, paddingBottom: 15 }}
              >
                <img
                  src={logo}
                  style={{ maxHeight: 25, width: "100%" }}
                  alt="saiot"
                />
                <div style={{ padding: "0 20px" }}>
                  <h2 style={{ fontSize: 20, color: "white" }}>
                    Funcionamento local
                  </h2>
                  <p style={{ fontSize: 12, color: "white" }}>
                    asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                    aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                    asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas dpoijbn
                    asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug asodhbsa
                    asd
                  </p>
                </div>
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
