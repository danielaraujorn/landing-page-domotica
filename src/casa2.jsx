import React, { Component } from "react";
import Imagem from "./svg/cidade_saiot.svg";

export default class LuzIcon extends Component {
  render() {
    return (
      <div>
        <img src={Imagem} />
      </div>
    );
  }
}
