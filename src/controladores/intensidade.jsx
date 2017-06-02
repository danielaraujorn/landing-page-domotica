import React, {Component} from 'react'
import Slider from 'material-ui/Slider'

export default class Intensidade extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:(this.props.value? this.props.value : this.props.min)
    }
  }
  handleSlider = (event, value) => {
    this.setState({value: value})
    this.props.onChange(Math.round(value))
  }
  render() {
    return (
        <Slider
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.state.value}
          onChange={this.handleSlider}
        />
    )
  }
}
