import React, {Component} from 'react'
import {HuePicker} from 'react-color'
import Slider from 'material-ui/Slider'

function rgbToHex(rgb) {
  function c(v) {
    let hex = v.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return "#" + c(rgb.r) + c(rgb.g) + c(rgb.b)
}

export default class ColorPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color:(this.props.value ? this.props.value : {r:0,g:50,b:255}),
      intensidade:(this.props.value ? this.props.value.x : 0.5)
    }
  }
  handleChangeColor = (color) => {
    this.setState({ color:color.rgb })
    this.props.onChange({r:color.rgb.r,g:color.rgb.g,b:color.rgb.b,x:this.state.intensidade})
  }
  handleSliderIntensidadeColor = (event, value) => {
    this.setState({intensidade:value})
    this.props.onChange({r:this.state.color.r,g:this.state.color.g,b:this.state.color.b,x:value})
  }
  render() {
    return (
      <div>
        <div className="width100">
          <HuePicker color={ this.state.color } onChangeComplete={ this.handleChangeColor } />
        </div>
        <br />
        <Slider
          className="sliderbackground"
          style={{backgroundColor:rgbToHex(this.state.color),width:"100%"}}
          min={0}
          max={1}
          step={this.props.step}
          value={this.state.intensidade}
          onChange={this.handleSliderIntensidadeColor}
        />
      </div>
    )
  }
}
