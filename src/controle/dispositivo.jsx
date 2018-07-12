import React, { Component } from "react";
// import constantes from '../../constantes'
import Toggle from "material-ui/Toggle";
import ConfigDialog from "../controladores/configdialog";
import Sensor from "./sensor";
export default class DispositivoUnico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      disabled: false
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChangeValue = (key, value) => {
    Boolean(this.props.controlPermission) &&
      this.props.putDispositivoControle(
        this.props.dispositivo.codDevice,
        key,
        value
      );
  };
  render() {
    let toggle = this.props.dispositivo.controllers.find(
      ({ type }) => (type = "onoff")
    );
    return (
      <div
        className="col-xs-12"
        style={{
          padding: 0
        }}
      >
        {this.props.dispositivo.state === "4" && (
          <div
            style={{
              height: "100%",
              width: 4,
              backgroundColor: "#ff4444",
              position: "absolute",
              zIndex: 2
            }}
          />
        )}
        <div
          className="col-xs-12 papercontrolesclass"
          style={{
            padding: "2px 0",
            backgroundColor: "white",
            borderTop: "1px solid #00000015"
          }}
        >
          <div>
            <div style={{ padding: "0 12px" }} className="col-xs-12">
              <div style={{ padding: 0 }} className="col-xs-7">
                <h5 style={{ padding: 0, fontSize: 16, textAlign: "left" }}>
                  {this.props.dispositivo.name}
                </h5>
              </div>
              <div style={{ padding: 0 }} className="col-xs-5">
                {this.props.dispositivo.controllers &&
                this.props.dispositivo.controllers.some(
                  item => item.type === "onoff"
                ) ? (
                  <Toggle
                    onToggle={e =>
                      this.handleChangeValue(
                        toggle.key,
                        Boolean(e.target.checked)
                      )
                    }
                    className="floatrightnomargin toggleswitch"
                    toggled={Boolean(toggle.value)}
                  />
                ) : null}
                {this.props.dispositivo.controllers.filter(
                  item => item.type !== "onoff"
                ).length ? (
                  <ConfigDialog
                    controlPermission={this.props.controlPermission}
                    codNode={this.props.dispositivo.codNode}
                    controllers={this.props.dispositivo.controllers}
                    onChange={this.handleChangeValue}
                  />
                ) : null}
              </div>
            </div>
            <div>
              <div
                style={{
                  padding: "0 12px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
                className="col-xs-12"
              >
                {this.props.dispositivo.sensors
                  .filter(item => item.value)
                  .map((sensor, i, array) => (
                    <Sensor
                      indice={i}
                      length={array.length}
                      key={i}
                      sensor={sensor}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
