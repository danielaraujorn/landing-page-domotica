import React, { Component } from 'react'
// import { ResponsiveContainer, LineChart, Line } from 'recharts'
export default class Sensor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      intervalo: false,
    }
  }
  componentWillMount() {
    this.addData(this.data(this.props.sensor.value))
  }
  componentWillReceiveProps(np) {
    // console.log(np.sensor)
    this.addData(this.data(np.sensor.value))
  }
  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props
  }
  data = value => ({
    name: 'Page' + this.state.data.length,
    value: Number(value),
  })
  // componentWillMount() {
  //   this.addData(this.data())
  //   this.setState({
  //     intervalo: setInterval(
  //       () => this.addData(this.data()),
  //       Math.random() * 400 + 800
  //     ),
  //   })
  // }
  // componentWillUnmount() {
  //   clearInterval(this.state.intervalo)
  // }
  addData = value => {
    this.setState({ data: [...this.state.data, value] })
    if (this.state.data.length > 12) {
      let data = this.state.data
      data.shift()
      this.setState({ data })
    }
  }
  render() {
    return (
      <div
        title={this.props.sensor.tag}
        style={{
          flex: 1,
          flexBasis: 120,
          height: 46,
          padding: '0 4px 4px 4px',
          borderRadius: 0,
          // borderRight:
          //   this.props.indice + 1 < this.props.length - (this.props.length % 3)
          //     ? '1px solid #00000033'
          //     : 'none',
          // backgroundColor: '#00494c',
        }}
        // className={'col-xs-' + tamanho}
      >
        <div
          style={{
            // position: 'absolute',
            // paddingRight: 15,
            zIndex: 1,
            // float: 'left',
          }}
        >
          <p
            style={{
              height: 12,
              // textAlign: 'center',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              margin: 0,
              marginTop: 2,
              fontSize: 12,
            }}
          >
            {this.props.sensor.tag}:
          </p>
          <p
            style={{
              fontSize: 20,
              // textAlign: 'center',
              margin: 0,
            }}
          >
            {Number(this.props.sensor.value).toFixed(2)}
            <span
              style={{
                fontSize: 13,
                fontWeight: 300,
                marginLeft: 2,
              }}
            >
              {this.props.sensor.unit}
            </span>
          </p>
        </div>
        {/* {this.state.data.length > 2 && ( */}
        {/* <div style={{ opacity: 0.4 }}>
          <ResponsiveContainer height={40}>
            <LineChart data={this.state.data}>
              <Line
                dot={false}
                type="monotone"
                dataKey="value"
                stroke="#88888888"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div> */}
        {/* )} */}
      </div>
    )
  }
}
