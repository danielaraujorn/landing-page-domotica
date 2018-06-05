import React, { Component } from "react";
import Paperchart from "./chart";
import moment from "moment";
import {
  cyan500,
  cyan700,
  cyan900,
  grey200,
  grey300,
  grey400,
  grey500,
  grey600,
  grey700,
  grey800,
  white
} from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
export const lightTheme = getMuiTheme({
  appBar: {
    textColor: "#fff",
    color: cyan900
  },
  bottomNavigation: {
    unselectedColor: grey600
  },
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: cyan900,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: cyan500,
    accent2Color: grey200,
    accent3Color: grey500,
    textColor: grey700,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: grey800
  }
});

const colors = [
  "rgba(0,96,100,",
  "rgba(251,105,0,",
  "rgba(0,185,189,",
  "rgba(246,55,0,",
  "rgba(118,188,173,"
];

export const getColor = i => {
  if (colors[i]) return colors[i];
};
export default class Historico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalo: false,
      x: Array(moment().hours() + 1)
        .fill(0)
        .map((item, i) => i + "h"),
      y: [
        Array(moment().hours() + 1)
          .fill(0)
          .map((item, i) => 15 + Math.random() * 10),
        Array(moment().hours() + 1)
          .fill(0)
          .map((item, i) => Math.random() * 50)
      ],
      S: [
        { name: "Temperatura (Celsius)" },
        { name: "Consumo de água (Litros)" }
      ],
      C: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
    };
  }
  // componentDidMount(){
  //   this.setState({intervalo:setInterval(()=>{
  //     let copiaX=this.state.x
  //     let copiaC
  //   },500)})
  // }
  componentWillUnmount() {
    clearInterval(this.state.intervalo);
  }
  render() {
    return (
      // <MuiThemeProvider muiTheme={lightTheme}>
      <div style={{ marginTop: 2 }} className="container">
        <div className="row">
          <div
            style={{ padding: 0 }}
            className="col-xs-12 col-md-offset-2 col-md-8"
          >
            <Paperchart
              tema={this.props.tema}
              valores={{
                x: this.state.x,
                y: this.state.y,
                S: this.state.S,
                C: this.state.C
              }}
            />
          </div>
        </div>
      </div>
      // </MuiThemeProvider>
    );
  }
}
