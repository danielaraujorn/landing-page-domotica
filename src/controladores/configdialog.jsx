import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import ActionSettings from 'material-ui/svg-icons/action/settings'
import {grey400} from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import Toggle from 'material-ui/Toggle'
import constantes from '../constantes'
import {isLight,rgbxToHex} from '../utils'
import ColorPicker from './colorpicker'
import Intensidade from './intensidade'

export default class ConfigDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      value:this.props.value,
      estado:1,
    }
  }
  handleOpen = () => {
    this.setState({open: true})
  }
  handleClose = () => {
    this.setState({open: false})
  }
  exibirOValor=(html,tipo)=>{
    return (<div style={{fontSize:18}}>{this.props.nome}{html}</div>)
  }
  onChangeValue=(newValue)=>{
    this.setState({value: newValue})
    this.props.onChange(newValue,this.state.estado)
  }
  handleOn=(event,checked) => {
    if(event.target.checked===true){
      this.props.onChange(this.state.value,0)
      this.setState({estado: 0})
    }else if(this.state.value!==0){
      this.props.onChange(this.state.value,1)
      this.setState({estado: 1})
    }
  }
  render() {
    let styletoggle, vartoggle
    if(this.state.estado===0){
      vartoggle=false
      styletoggle=''
    }
    else if (this.state.estado===1){
      vartoggle=true
      styletoggle=''
    }
    else{
      vartoggle=false
      styletoggle = {
        thumbOff: {
          backgroundColor: '#ffcccc',
        },
        trackOff: {
          backgroundColor: '#ff9d9d',
        },
        thumbSwitched: {
          backgroundColor: 'red',
        },
        trackSwitched: {
          backgroundColor: '#ff9d9d',
        },
      }
    }
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <Toggle onTouchTap={this.handleOn.bind(this)} disabled={this.state.disabled} className="floatrightnomargin toggleswitch" toggled={vartoggle}
      thumbStyle={styletoggle.thumbOff}
      trackStyle={styletoggle.trackOff}
      thumbSwitchedStyle={styletoggle.thumbSwitched}
      trackSwitchedStyle={styletoggle.trackSwitched} />,
    ]
    let exibirValor= null
    let tipoconfiguracoes = null
    if(this.props.tipo===constantes.tipos.rgb){
      let inhex=null
      if(this.state.value)
        inhex=rgbxToHex(this.state.value)
      exibirValor=this.exibirOValor(<div style={{fontWeight:"500",textTransform:"uppercase",float:"right",color:inhex,backgroundColor:isLight(inhex),padding:"0 10px"}}>{inhex}</div>,this.props.tipo)
      tipoconfiguracoes=(
        <ColorPicker step={0.1} onChange={this.onChangeValue} value={this.state.value}/>
      )
    }
    else if(this.props.tipo===constantes.tipos.arCondicionado){
      exibirValor=this.exibirOValor(<div style={{float:"right"}}>{this.state.value}°C</div>)
      tipoconfiguracoes=(
        <Intensidade
          min={16}
          max={30}
          step={1}
          value={this.state.value}
          onChange={this.onChangeValue}
        />
      )
    }
    else if(this.props.tipo===constantes.tipos.intensidade){
      exibirValor=this.exibirOValor(<div style={{float:"right"}}>{Math.round(this.state.value/2.55)}%</div>)
      tipoconfiguracoes=(
        <Intensidade
          min={0}
          max={255}
          step={25.5}
          value={this.state.value}
          onChange={this.onChangeValue}
        />
      )
    }
    if(this.props.tipo){
      return (
          <div>
            <IconButton className="actioncontroles" onTouchTap={this.handleOpen} >
              <ActionSettings color={grey400} />
            </IconButton>
            <Dialog
              className="dialogcontroles"
              title={exibirValor}
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              autoScrollBodyContent={true}
            >
              {tipoconfiguracoes}
            </Dialog>
          </div>
      )
    }
    else return (<div></div>)
  }
}
