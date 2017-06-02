import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import {
    cyan300, cyan400, cyan500, cyan700, cyan900,
    grey200, grey300, grey400, grey500,grey600, grey700, grey800, grey900,
    white,
} from 'material-ui/styles/colors'

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

export const darkTheme = getMuiTheme(darkBaseTheme, {
  appBar: {
    textColor: '#fff',
    color: cyan900,
  },
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan400,
    primary3Color: grey400,
    accent1Color: cyan300,
    accent2Color: grey200,
    accent3Color: grey500,
    textColor: grey300,
    borderColor: grey300,
    shadowColor: grey900,
    pickerHeaderColor: cyan300,
  },
})


const constantes = {
  tipos: {
    hidrometro    : 'aab3db584e34464d993e6e3ce1ce2d62',
    tomada        : 'bf75c6f208d74fd8801781e0a13d070f',
    onOff         : 'f911a1a991864d1a95c3bd40177ee43c',
    rgb           : '1e18bdd9716143c992adec71dc4db4e8',
    intensidade   : 'dca4d0c86e8649829559d5e9ec26a2dc',
    arCondicionado: 'ad4394d628c24982aced6748a0dc6235'
  },
  tempoEntreEnvio: 100,
  tamanhoMaximoNome: 24,
  desenvolvimento: false
}

export default constantes