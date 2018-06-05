import React, { Component } from "react";
import Grafico from "react-chartjs-2";
import { getColor } from "./historico";
export default class Paperchart extends Component {
  render() {
    const data = { labels: [], datasets: [] };
    data.labels = this.props.valores.x;
    this.props.valores.y.forEach((item, i) => {
      data.datasets.push({
        label: this.props.valores.S[i].name,
        fill: false,
        lineTension: 0.1,
        backgroundColor: getColor(i) + "0.8)",
        borderColor: getColor(i) + "0.8)",
        hoverBackgroundColor: getColor(i) + "0.6)",
        hoverBorderColor: getColor(i) + "0.6)",
        borderWidth: 0,
        data: this.props.valores.y[i].map((element, j) =>
          Number((element / (this.props.valores.C[i][j] || 1)).toFixed(2))
        )
      });
    });
    if (
      this.props.valores.y
        .map(item => item.reduce((a, b) => a + b))
        .reduce((a, b) => a + b)
    )
      return (
        <div
          style={{ padding: "0 2px", margin: 0, marginTop: 4 }}
          className="col-xs-12 "
        >
          <div
            style={{ backgroundColor: "white", borderRadius: 4 }}
            className="col-xs-12"
          >
            <Grafico
              style={{ width: "80%" }}
              data={data}
              type="bar"
              options={{
                responsive: true,
                scales: { yAxes: [{ ticks: { min: 0 } }] }
              }}
            />
          </div>
        </div>
      );
    else return null;
  }
}
