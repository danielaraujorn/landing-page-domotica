import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import Toggle from 'material-ui/Toggle'
import CircularProgress from 'material-ui/CircularProgress'
import {rgbxToHex,temConfig,ehAtuador,isValid,getSession,setSession} from './utils'
import ConfigDialog from './controladores/configdialog'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import luz1 from './luz.svg'
import {
    cyan300, cyan400, cyan500, cyan700, cyan900,
    grey200, grey300, grey400, grey500,grey600, grey700, grey800, grey900,
    white,
} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
export const lightTheme = getMuiTheme({
  appBar: {
    textColor: '#fff',
    color: cyan900,
  },
  bottomNavigation: {
    unselectedColor: grey600,
  },
  fontFamily: 'Roboto, sans-serif',
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
    shadowColor: grey800,
  },
})
const dispositivo1={
  nome:"intensidade",
  uuid_tipo:'dca4d0c86e8649829559d5e9ec26a2dc'
}
const dispositivo2={
  nome:"luz rgb",
  uuid_tipo:'1e18bdd9716143c992adec71dc4db4e8'
}
const dispositivo3={
  nome:"lampada",
  uuid_tipo:'f911a1a991864d1a95c3bd40177ee43c'
}
const dispositivo4={
  nome:"ar condicionado",
  uuid_tipo:'ad4394d628c24982aced6748a0dc6235'
}

export default class exibicao extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dispositivo1Value:255,
      dispositivo2Value:{r:255,g:255,b:0,x:0.5},
      dispositivo3Value:"#FFFF00",
      dispositivo4Value:"#FF00FF"
    }
  }
  dispositivo1Change=(value,estado)=>{
    if(estado===1){
      this.setState({dispositivo1Value:value})
    }else if(estado===0){
      this.setState({dispositivo1Value:0})
    }
  }
  dispositivo2Change=(value,estado)=>{
    if(estado===1){
      this.setState({dispositivo2Value:value})
    }else if(estado===0){
      this.setState({dispositivo2Value:{r:255,g:255,b:0,x:0}})
    }
  }
  dispositivo3Change=(value,estado)=>{
    if(estado===1){
      this.setState({dispositivo3Value:"#FFFF00"})
    }else if(estado===0){
      this.setState({dispositivo3Value:"#000"})
    }
  }
  dispositivo4Change=(value,estado)=>{
    console.log("dispositivo4",value,estado)
  }
  render(){
    return (
        <MuiThemeProvider muiTheme={lightTheme}>
          <div className="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 col-md-4">
                <div className="atuadores col-xs-4 col-xs-offset-2">
                  <LuzIcon cor={rgbxToHex({r:255,g:255,b:0,x:0.5*(this.state.dispositivo1Value/255)})} />
                </div>
                <div className="atuadores col-xs-4">
                  <LuzIcon cor={rgbxToHex(this.state.dispositivo2Value)} />
                </div>
                <div className="atuadores col-xs-4 col-xs-offset-2">
                  <LuzIcon cor={this.state.dispositivo3Value} />
                </div>
                <div className="atuadores col-xs-4">
                  <LuzIcon cor="#00ff00" />
                </div>
              </div>
              <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2">
                <DispositivoUnico value={this.state.dispositivo1Value} onChange={this.dispositivo1Change} dispositivo={dispositivo1}/>
                <DispositivoUnico value={this.state.dispositivo2Value} onChange={this.dispositivo2Change} dispositivo={dispositivo2}/>
                <DispositivoUnico value={this.state.dispositivo3Value} onChange={this.dispositivo3Change} dispositivo={dispositivo3}/>
                <DispositivoUnico value={this.state.dispositivo4Value} onChange={this.dispositivo4Change} dispositivo={dispositivo4}/>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      )
  }
}
class LuzIcon extends Component{
  render() {
    return(
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<title>light-bulb</title>
<path d="M256,0C114.61,0,0,114.62,0,256S114.61,512,256,512,512,397.38,512,256,397.37,0,256,0Zm-2.12,372.85c-22,0-39.84-18.91-39.84-42.26h79.68C293.71,353.94,275.87,372.85,253.87,372.85Zm37-64.46H216.9c-2-21.77-53.72-40.74-53.72-95.15,0-58,43.39-88.79,90.68-90h0c47.3,1.17,90.68,31.93,90.68,90C344.56,267.65,292.83,286.62,290.84,308.39Z" fill="#fff"/>
<path d="M293.71,330.59c0,23.35-17.84,42.26-39.84,42.26S214,353.94,214,330.59Z" fill={this.props.cor}/>
<path d="M344.55,213.24c0,54.41-51.72,73.38-53.71,95.15H216.9c-2-21.77-53.72-40.74-53.72-95.15,0-58,43.39-88.79,90.68-90h0C301.17,124.46,344.55,155.22,344.55,213.24Z" fill={this.props.cor}/></svg>
       )
  }
}
 class DispositivoUnico extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estado:1,
      open: false,
      value:this.props.value,
      disabled:false,
    }
  }
  handleOpen = () => {
    this.setState({open: true})
  }
  handleClose = () => {
    this.setState({open: false})
  }
  handleChangeValue=(newValue,newEstado)=>{
   	this.setState({value:newValue,estado:newEstado})
    this.props.onChange(newValue,newEstado)
  }

  handleOn=(event,checked) => {
    if(event.target.checked===true){
      //this.props.putDispositivoControle(this.props.dispositivo.uuid,"0")
      this.setState({estado: 0})
      this.props.onChange(this.state.value,0)
    }else if(this.state.value!==0){
      //this.props.putDispositivoControle(this.props.dispositivo.uuid,this.state.value)
      this.setState({estado: 1})
      this.props.onChange(this.state.value,1)
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
    return (
        <Paper className="col-xs-12 papercontrolesclass">
          <h5 style={{padding:0,textAlign:"left"}} className="col-xs-6">{this.props.dispositivo.nome}</h5>
          <Toggle onTouchTap={this.handleOn.bind(this)} disabled={this.state.disabled} className="floatrightnomargin toggleswitch" toggled={vartoggle}
          thumbStyle={styletoggle.thumbOff}
          trackStyle={styletoggle.trackOff}
          thumbSwitchedStyle={styletoggle.thumbSwitched}
          trackSwitchedStyle={styletoggle.trackSwitched} />
          {temConfig(this.props.dispositivo.uuid_tipo)?<ConfigDialog value={this.state.value} onChange={this.handleChangeValue} nome={this.props.dispositivo.nome} tipo={this.props.dispositivo.uuid_tipo} /> : null}
        </Paper>
    )
  }
}
