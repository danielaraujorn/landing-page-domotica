import React, { Component } from "react";
import { HuePicker } from "react-color";
import Slider from "material-ui/Slider";
import { isValid } from "../utils";

function c(v) {
  if (isValid(v)) {
    let hex = v.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  } else return "ff";
}
function rgbToHex(rgb) {
  return "#" + c(rgb.r) + c(rgb.g) + c(rgb.b);
}
export default class ColorPicker extends Component {
  handleChangeColorPicker = color => {
    let newColor = this.props.rgbx
      ? {
          r: color.rgb.r,
          g: color.rgb.g,
          b: color.rgb.b,
          x: this.props.value.x
        }
      : { r: color.rgb.r, g: color.rgb.g, b: color.rgb.b };
    this.props.onChange(newColor);
  };
  handleSliderIntensidadeColor = (event, x) => {
    this.props.onChange({
      ...this.props.value,
      x
    });
  };
  render() {
    let renderSliderX = null;
    if (this.props.rgbx) {
      renderSliderX = (
        <div>
          <Slider
            disableFocusRipple={true}
            className="sliderbackground sliderIntensidade"
            style={{
              backgroundColor: rgbToHex(this.props.value),
              width: "100%"
            }}
            min={0}
            max={1}
            step={this.props.step}
            value={this.props.value.x}
            onChange={this.handleSliderIntensidadeColor}
          />
        </div>
      );
    }
    return (
      <div
        style={{
          paddingTop: 14,
          paddingBottom: 4,
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        {this.props.tag ? (
          <p style={{ fontSize: 12 }}>{this.props.tag + ":"}</p>
        ) : null}
        <div className="width100">
          <HuePicker
            color={this.props.value}
            onChange={this.handleChangeColorPicker}
          />
        </div>
        <br />
        {renderSliderX}
        {/* <div style={{ height: 50, display: 'flex' }}>
          {this.renderFavColors()}
        </div> */}
      </div>
    );
  }
}
