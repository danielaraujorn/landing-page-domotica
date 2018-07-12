import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import ActionSettings from "material-ui/svg-icons/action/settings";
import { grey400 } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import ColorPicker from "./colorpicker";
import Intensidade from "./intensidade";
import MyToggle from "./toggle";
const SliderComponent = props => (
  <Intensidade
    key={props.key}
    onChange={props.onChange}
    tag={props.controller.tag}
    min={props.controller.min}
    max={props.controller.max}
    step={props.controller.step}
    value={props.controller.value}
  />
);

const RgbxComponent = props => (
  <ColorPicker
    rgbx={true}
    onChange={props.onChange}
    tag={props.controller.tag}
    step={0.02}
    key={props.key}
    codAndKey={props.codNode + props.controller.key}
    value={props.controller.value || { r: 255, g: 0, b: 0, x: 0.5 }}
  />
);

const RgbComponent = props => (
  <ColorPicker
    rgbx={false}
    key={props.key}
    tag={props.controller.tag}
    step={0.02}
    onChange={props.onChange}
    codAndKey={props.codNode + props.controller.key}
    value={props.controller.value}
  />
);

const ToggleComponent = props => (
  <MyToggle
    key={props.key}
    onChange={props.onChange}
    tag={props.controller.tag}
  />
);

const controladores = {
  slider: props => SliderComponent(props),
  rgbx: props => RgbxComponent(props),
  rgb: props => RgbComponent(props),
  toggle: props => ToggleComponent(props)
};

export default class ConfigDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    // let styletoggle, vartoggle
    let toggle = this.props.controllers.find(({ type }) => (type = "onoff"));
    // console.log(toggle)
    // if (toggle.value === 0) {
    //   vartoggle = false
    //   styletoggle = ''
    // } else if (toggle.value === 1) {
    //   vartoggle = true
    //   styletoggle = ''
    // } else {
    //   vartoggle = false
    //   styletoggle = {
    //     thumbOff: {
    //       backgroundColor: '#ffcccc',
    //     },
    //     trackOff: {
    //       backgroundColor: '#ff9d9d',
    //     },
    //     thumbSwitched: {
    //       backgroundColor: 'red',
    //     },
    //     trackSwitched: {
    //       backgroundColor: '#ff9d9d',
    //     },
    //   }
    // }
    const actions = [
      !this.props.controlPermission && (
        <div
          className="floatrightnomargin toggleswitch"
          style={{
            margin: 0,
            padding: 8,
            color: "#f44"
            // padding: '5px 10px',
          }}
        >
          não há permissão de controle
        </div>
      ),
      <FlatButton label="Ok" primary={true} onTouchTap={this.handleClose} />,
      <Toggle
        onTouchTap={e =>
          this.props.onChange(toggle.key, Boolean(!e.target.checked))
        }
        // disabled={this.state.disabled}
        className="floatrightnomargin toggleswitch"
        toggled={Boolean(toggle.value)}
        // thumbStyle={styletoggle.thumbOff}
        // trackStyle={styletoggle.trackOff}
        // thumbSwitchedStyle={styletoggle.thumbSwitched}
        // trackSwitchedStyle={styletoggle.trackSwitched}
      />
    ];
    return (
      <div>
        <IconButton className="actioncontroles" onClick={this.handleOpen}>
          <ActionSettings color={grey400} />
        </IconButton>
        <Dialog
          className="dialogcontroles"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          {this.props.controllers.map(
            item =>
              controladores[item.type] &&
              controladores[item.type]({
                key: item.key,
                codNode: this.props.codNode,
                controller: item,
                onChange: value => this.props.onChange(item.key, value)
              })
          )}
        </Dialog>
      </div>
    );
  }
}
