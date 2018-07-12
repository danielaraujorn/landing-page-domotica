import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";
import logo from "./logo.svg";
import Exibicao from "./demonstracao/demonstracao";
import Historico from "./historico";
import injectTapEventPlugin from "react-tap-event-plugin";
import mobile from "./handMobile.png";
import lineChart from "./line-chart.svg";
import connection from "./connection.svg";
import paper from "./paper.svg";
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
            className="hidden-xs hidden-sm rotateMobile"
            style={{
              position: "absolute",
              top: "50%",
              right: "50%"
            }}
            src={mobile}
            alt="saiot"
          />
          <div>
            <div className="logoInicial">
              <img src={logo} alt="saiot" />
              <h2>Saiot</h2>
            </div>
            <div className="container">
              <div
                className="row"
                style={{ display: "flex", alignItems: "center" }}
              >
                {/* <div
                  style={{ textAlign: "right" }}
                  className="hidden-xs hidden-sm col-md-6"
                >
                  <img
                    className="fadeIn"
                    style={{ maxWidth: "45%" }}
                    src={mobile}
                    alt="saiot"
                  />
                </div> */}
                <div
                  style={{ textAlign: "left", paddingRight: 40 }}
                  className="col-md-offset-6 col-md-4"
                >
                  <h1
                    className="fadeIn"
                    style={{ color: "#FFFB", fontSize: "4em", margin: 0 }}
                  >
                    O <strong style={{ color: "#fff" }}>controle</strong> na
                    palma da sua mão
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
        </div>
        <div className="section">
          <div>
            <div style={{ padding: 0 }} className="col-lg-8 col-xs-12 ">
              <div className="backgroundImage1">
                <div
                  className="paperDescription subSection01"
                  style={{
                    position: "relative",
                    top: "15px"
                  }}
                >
                  <div className="imageDiv">
                    <img src={lineChart} alt="saiot" />
                  </div>
                  <div
                    className="truncate"
                    style={{
                      padding: "0 20px"
                    }}
                  >
                    <h2>Análise de dados</h2>
                    <p>
                      asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                      aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                      asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas
                      dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug
                      asodhbsa asd
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: 0 }} className="col-lg-4 col-xs-12">
              <div>
                <div className="backgroundImage2">
                  <div
                    className="paperDescription subSection02"
                    style={{
                      position: "relative",
                      top: "15px"
                    }}
                  >
                    <div className="imageDiv">
                      <img src={connection} alt="saiot" />
                    </div>
                    <div className="truncate" style={{ padding: "0 20px" }}>
                      <h2>Comunidade</h2>
                      <p>
                        asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                        aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                        asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas
                        dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug
                        asodhbsa asd
                      </p>
                    </div>
                  </div>
                </div>
                <div className="backgroundImage3">
                  <div
                    className="paperDescription subSection03"
                    style={{
                      position: "relative",
                      top: "15px"
                    }}
                  >
                    <div className="imageDiv">
                      <img src={paper} alt="saiot" />
                    </div>
                    <div className="truncate" style={{ padding: "0 20px" }}>
                      <h2>Publicações</h2>
                      <p>
                        asodnas dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd
                        aoshdug asodhbsa asd asodnas dpoijbn asdóubnasd asdasd
                        asdasdasdki asdohuasgd aoshdug asodhbsa asd asodnas
                        dpoijbn asdóubnasd asdasd asdasdasdki asdohuasgd aoshdug
                        asodhbsa asd
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div id="section1" className="section">
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
