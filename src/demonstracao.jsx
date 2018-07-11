import React, { Component } from "react";
import Paper from "material-ui/Paper";
import Toggle from "material-ui/Toggle";
import { rgbxToHex, temConfig } from "./utils";
import ConfigDialog from "./controladores/configdialog";
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
import Casa from "./casa.jsx";
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
const dispositivo1 = {
  nome: "grupo terreo",
  uuid_tipo: "1e18bdd9716143c992adec71dc4db4e8"
};
const dispositivo2 = {
  nome: "luz quarto",
  uuid_tipo: "dca4d0c86e8649829559d5e9ec26a2dc"
};
const dispositivo3 = {
  nome: "luz escritorio",
  uuid_tipo: "f911a1a991864d1a95c3bd40177ee43c"
};
const dispositivo4 = {
  nome: "ar condicionado",
  uuid_tipo: "1e18bdd9716143c992adec71dc4db4e8"
};
const dispositivo5 = {
  nome: "Cozinha",
  uuid_tipo: "1e18bdd9716143c992adec71dc4db4e8"
};

export default class exibicao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dispositivo1Value: { r: 88, g: 190, b: 227, x: 0.5 },
      dispositivo2Value: 255,
      dispositivo3Value: "#58BEE3",
      dispositivo4Value: { r: 88, g: 190, b: 227, x: 0.5 },
      dispositivo5Value: { r: 88, g: 190, b: 227, x: 0.5 },
      dispositivo1Estado: 1,
      dispositivo2Estado: 1,
      dispositivo3Estado: 1,
      dispositivo4Estado: 1,
      dispositivo5Estado: 1
    };
  }
  dispositivo2Change = (value, estado) => {
    this.setState({ dispositivo2Estado: estado });
    if (estado === 1) {
      this.setState({ dispositivo2Value: value });
    } else if (estado === 0) {
      this.setState({ dispositivo2Value: 0 });
    }
  };
  dispositivo1Change = (value, estado) => {
    this.setState({ dispositivo1Estado: estado });
    this.setState({ dispositivo4Estado: estado });
    this.setState({ dispositivo5Estado: estado });
    if (estado === 1) {
      this.setState({ dispositivo4Value: value });
      this.setState({ dispositivo5Value: value });
      this.setState({ dispositivo1Value: value });
    } else if (estado === 0) {
      this.setState({ dispositivo1Value: { r: 88, g: 190, b: 227, x: 0 } });
      this.setState({ dispositivo4Value: { r: 88, g: 190, b: 227, x: 0 } });
      this.setState({ dispositivo5Value: { r: 88, g: 190, b: 227, x: 0 } });
    }
  };
  dispositivo4Change = (value, estado) => {
    this.setState({ dispositivo4Estado: estado });
    if (estado === 1) {
      this.setState({ dispositivo4Value: value });
      if (this.state.dispositivo5Estado)
        this.setState({ dispositivo1Estado: estado });
    } else if (estado === 0) {
      this.setState({ dispositivo1Estado: estado });
      this.setState({ dispositivo4Value: { r: 88, g: 190, b: 227, x: 0 } });
    }
  };
  dispositivo5Change = (value, estado) => {
    this.setState({ dispositivo5Estado: estado });
    if (estado === 1) {
      this.setState({ dispositivo5Value: value });
      if (this.state.dispositivo4Estado)
        this.setState({ dispositivo1Estado: estado });
    } else if (estado === 0) {
      this.setState({ dispositivo1Estado: estado });
      this.setState({ dispositivo5Value: { r: 88, g: 190, b: 227, x: 0 } });
    }
  };
  dispositivo3Change = (value, estado) => {
    this.setState({ dispositivo3Estado: estado });
    if (estado === 1) {
      this.setState({ dispositivo3Value: "#58BEE3" });
    } else if (estado === 0) {
      this.setState({ dispositivo3Value: "#000" });
    }
  };
  render() {
    return (
      <MuiThemeProvider muiTheme={lightTheme}>
        <div className="container">
          <div className="row controlando">
            <div className="col-xs-8 col-xs-offset-2 col-sm-4">
              <Casa
                primeiroSala={rgbxToHex(this.state.dispositivo4Value)}
                primeiro={rgbxToHex(this.state.dispositivo5Value)}
                quarto={rgbxToHex({
                  r: 88,
                  g: 190,
                  b: 227,
                  x: 0.5 * (this.state.dispositivo2Value / 255)
                })}
                escritorio={this.state.dispositivo3Value}
              />
              <ReactTooltip />
            </div>
            <div
              style={{ padding: 0 }}
              className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-1"
            >
              <DispositivoUnico
                estado={this.state.dispositivo1Estado}
                value={this.state.dispositivo1Value}
                onChange={this.dispositivo1Change}
                dispositivo={dispositivo1}
              />
              <DispositivoUnico
                estado={this.state.dispositivo2Estado}
                value={this.state.dispositivo2Value}
                onChange={this.dispositivo2Change}
                dispositivo={dispositivo2}
              />
              <DispositivoUnico
                estado={this.state.dispositivo3Estado}
                value={this.state.dispositivo3Value}
                onChange={this.dispositivo3Change}
                dispositivo={dispositivo3}
              />
              <DispositivoUnico
                estado={this.state.dispositivo4Estado}
                value={this.state.dispositivo4Value}
                onChange={this.dispositivo4Change}
                dispositivo={dispositivo4}
              />
              <DispositivoUnico
                estado={this.state.dispositivo5Estado}
                value={this.state.dispositivo5Value}
                onChange={this.dispositivo5Change}
                dispositivo={dispositivo5}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
class DispositivoUnico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: this.props.value,
      disabled: false
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChangeValue = (newValue, newEstado) => {
    this.props.onChange(newValue, newEstado);
  };

  handleOn = (event, checked) => {
    if (event.target.checked === true) {
      //this.props.putDispositivoControle(this.props.dispositivo.uuid,"0")
      this.props.onChange(this.state.value, 0);
    } else if (this.state.value !== 0) {
      //this.props.putDispositivoControle(this.props.dispositivo.uuid,this.state.value)
      this.props.onChange(this.state.value, 1);
    }
  };
  render() {
    let styletoggle, vartoggle;
    if (this.props.estado === 0) {
      vartoggle = false;
      styletoggle = "";
    } else if (this.props.estado === 1) {
      vartoggle = true;
      styletoggle = "";
    } else {
      vartoggle = false;
      styletoggle = {
        thumbOff: {
          backgroundColor: "#ffcccc"
        },
        trackOff: {
          backgroundColor: "#ff9d9d"
        },
        thumbSwitched: {
          backgroundColor: "red"
        },
        trackSwitched: {
          backgroundColor: "#ff9d9d"
        }
      };
    }
    return (
      <Paper className="col-xs-12 papercontrolesclass">
        <h5 style={{ padding: 0, textAlign: "left" }} className="col-xs-6">
          {this.props.dispositivo.nome}
        </h5>
        <Toggle
          onTouchTap={this.handleOn.bind(this)}
          disabled={this.state.disabled}
          className="floatrightnomargin toggleswitch"
          toggled={vartoggle}
          thumbStyle={styletoggle.thumbOff}
          trackStyle={styletoggle.trackOff}
          thumbSwitchedStyle={styletoggle.thumbSwitched}
          trackSwitchedStyle={styletoggle.trackSwitched}
        />
        {temConfig(this.props.dispositivo.uuid_tipo) ? (
          <ConfigDialog
            value={this.state.value}
            onChange={this.handleChangeValue}
            nome={this.props.dispositivo.nome}
            tipo={this.props.dispositivo.uuid_tipo}
          />
        ) : null}
      </Paper>
    );
  }
}
