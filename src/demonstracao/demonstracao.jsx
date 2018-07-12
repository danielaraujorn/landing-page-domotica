import React, { Component } from "react";
import DispositivoUnico from "../controle/dispositivo";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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
import ReactTooltip from "react-tooltip";
import Casa from "../casa";
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

export default class exibicao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispositivos: [
        {
          codDevice: "1",
          name: "Luz da sala",
          controllers: [
            {
              key: "ON",
              tag: "on/off",
              type: "onoff",
              description: "",
              value: true
            },
            {
              key: "COR",
              tag: "cor",
              type: "rgbx",
              description: "",
              value: {
                r: 255,
                g: 237,
                b: 0,
                x: 0.95
              }
            }
          ],
          sensors: [],
          codNode: "15755e63daff4475845730ffe6c2de34",
          state: "3"
        },
        {
          codDevice: "4",
          name: "Cortina da sala",
          controllers: [
            {
              key: "ON",
              tag: "on/off",
              type: "onoff",
              description: "",
              value: false
            }
          ],
          sensors: [],
          codNode: "15755e63daff4475845730ffe6c2de34",
          state: "3"
        },
        {
          codDevice: "2",
          name: "Luz do quarto 1",
          controllers: [
            {
              key: "ON",
              tag: "on/off",
              type: "onoff",
              description: "",
              value: false
            },
            {
              key: "COR",
              tag: "cor",
              type: "rgbx",
              description: "",
              value: {
                r: 0,
                g: 250,
                b: 160,
                x: 0.8
              }
            }
          ],
          sensors: [],
          codNode: "15755e63daff4475845730ffe6c2de34",
          state: "3"
        },
        {
          codDevice: "3",
          name: "Luz quarto 2",
          controllers: [
            {
              key: "ON",
              tag: "on/off",
              type: "onoff",
              description: "",
              value: true
            },
            {
              key: "COR",
              tag: "cor",
              type: "rgbx",
              description: "",
              value: {
                r: 30,
                g: 150,
                b: 255,
                x: 0.65
              }
            }
          ],
          sensors: [],
          codNode: "15755e63daff4475845730ffe6c2de34",
          state: "3"
        }
      ]
    };
  }
  onChange = (codDevice, key, value) => {
    let i = this.state.dispositivos.findIndex(
      dispositivo => dispositivo.codDevice === codDevice
    );
    let j = this.state.dispositivos[i].controllers.findIndex(
      controller => controller.key === key
    );
    let dispositivos = this.state.dispositivos;
    dispositivos[i].controllers[j].value = value;
    this.setState({ dispositivos });
  };
  render() {
    return (
      <MuiThemeProvider muiTheme={lightTheme}>
        <div className="container">
          <div className="row controlando">
            <div className="col-xs-8 col-xs-offset-2 col-sm-4">
              <Casa
                sala={this.state.dispositivos[0].controllers}
                janela={this.state.dispositivos[1].controllers[0].value}
                quarto1={this.state.dispositivos[2].controllers}
                quarto2={this.state.dispositivos[3].controllers}
              />
              <ReactTooltip />
            </div>
            <div
              style={{ padding: 0 }}
              className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-1"
            >
              {this.state.dispositivos.map(dispositivo => (
                <DispositivoUnico
                  putDispositivoControle={this.onChange}
                  controlPermission={true}
                  key={dispositivo.codDevice}
                  dispositivo={dispositivo}
                  value={dispositivo.value}
                />
              ))}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
