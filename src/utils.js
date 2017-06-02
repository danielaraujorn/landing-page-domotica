import constantes from './constantes'

export function isValid(value){
  if(value!==undefined&&value!==null) return true
  else return false
}
export function createCssClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}

export function rgbToHex(rgb) {
  function c(v) {
    let hex = v.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }
  return "#" + c(rgb.r) + c(rgb.g) + c(rgb.b)
}

export function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function isLight(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = result ? 0.2126*parseInt(result[1], 16) + 0.7152*parseInt(result[2], 16) + 0.0722*parseInt(result[3], 16) : 0;
    if(result>=127.5) return "black"
    else return "white"
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export function rgbxToHex(color){
  if(color!==""){
    let porcent, retorno=color
    if(color.x< 0.5){
      porcent=color.x/0.5
      retorno={
        r:color.r*porcent,
        g:color.g*porcent,
        b:color.b*porcent
      }
    }else if(color.x>0.5){
      porcent=1-((color.x-0.5)/0.5)
      retorno={
        r:255-(255-color.r)*porcent,
        g:255-(255-color.g)*porcent,
        b:255-(255-color.b)*porcent
      }
    }else{
      retorno={
        r:color.r,
        g:color.g,
        b:color.b
      }
    }
    retorno={
      r:Math.round(retorno.r),
      g:Math.round(retorno.g),
      b:Math.round(retorno.b)
    }
    return "#" + componentToHex(retorno.r) + componentToHex(retorno.g) + componentToHex(retorno.b);
  }else return null
}

export function ehAtuador(comp){
  let temps=[constantes.tipos.arCondicionado,constantes.tipos.intensidade,constantes.tipos.rgb,constantes.tipos.onOff,constantes.tipos.tomada]
  return temps.some((temp)=>(temp===comp))
}

export function temConfig(comp){
  let temps=[constantes.tipos.arCondicionado,constantes.tipos.intensidade,constantes.tipos.rgb]
  return temps.some((temp)=>(temp===comp))
}