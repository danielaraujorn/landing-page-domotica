import React, { Component } from "react";
import { rgbxToHex } from "./utils";
export default class Casa extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.janela !== nextProps.janela) {
      let array = document.getElementsByClassName(
        nextProps.janela ? "closeWindows" : "openWindows"
      );
      for (let i = 0; i < array.length; i++) {
        array[i].beginElement();
      }
      // document.getElementsByClassName("openWindows").forEach(element => {
      //   console.log(element);
      // });
      // document.getElementsByClassName("openWindows").beginElement();
    }
  }
  render() {
    let corDaSala = this.props.sala.find(({ type }) => type === "onoff").value
      ? rgbxToHex(this.props.sala.find(({ type }) => type === "rgbx").value) +
        "cc"
      : "#111111";
    let corDoQuarto1 = this.props.quarto1.find(({ type }) => type === "onoff")
      .value
      ? rgbxToHex(
          this.props.quarto1.find(({ type }) => type === "rgbx").value
        ) + "cc"
      : "#111111";
    let corDoQuarto2 = this.props.quarto2.find(({ type }) => type === "onoff")
      .value
      ? rgbxToHex(
          this.props.quarto2.find(({ type }) => type === "rgbx").value
        ) + "cc"
      : "#111111";

    return (
      <div>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 713.5 1030.5"
          enableBackground="new 0 0 713.5 1030.5"
        >
          <g>
            <g>
              <g>
                <g>
                  <polygon
                    fill="#EDEDEE"
                    points="36.8,812.5 36.8,855.7 336.8,1031.5 336.8,985.7"
                  />
                  <polygon
                    fill="#BBBDBF"
                    points="336.8,985.7 336.8,1032.2 665.8,841 665.8,794.5"
                  />
                  <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="260.3029"
                    y1="1000.8056"
                    x2="306.1269"
                    y2="1046.6296"
                  >
                    <stop offset="0" style={{ stopColor: "#231F20" }} />
                    <stop
                      offset="1"
                      style={{ stopColor: "#231F20", stopOpacity: 0 }}
                    />
                  </linearGradient>
                  <polygon
                    opacity="0.2"
                    fill="url(#SVGID_1_)"
                    points="246.2,1034.1 341.1,1034.1 295.1,1005.9"
                  />
                  <g enableBackground="new">
                    <g>
                      <polygon
                        fill="#A6A8AB"
                        points="275.7,987.1 203,944.9 203,930.6 275.7,972.8"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#F1F1F2"
                        points="275.7,972.8 203,930.6 222.2,919.4 294.9,961.7"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#A6A8AB"
                        points="260.6,1011.5 187.9,969.3 187.8,953.7 260.5,995.9"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#F1F1F2"
                        points="260.5,995.9 187.8,953.7 203,944.9 275.7,987.1"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#F1F1F2"
                        points="246.2,1019.8 173.5,977.6 187.9,969.3 260.6,1011.5"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#A6A8AB"
                        points="246.2,1034.1 173.5,991.9 173.5,977.6 246.2,1019.8"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#BBBDBF"
                        points="294.9,961.7 295.1,1005.9 246.2,1034.1 246.2,1019.8 260.6,1011.5 260.5,995.9 275.7,987.1 
              275.7,972.8"
                      />
                    </g>
                  </g>
                  <g>
                    <polygon
                      fill="#004E52"
                      points="337.4,696.1 666.4,504.9 665.8,794.5 336.8,985.7"
                    />
                  </g>
                  <g>
                    <polygon
                      fill="#006064"
                      points="337.4,696.1 336.8,985.7 36.8,812.5 37.4,522.8"
                    />
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="487.6,842.3 480.4,838.1 480.4,840.9 487.6,845.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="555.4,802.9 547.7,799 480.4,838.1 487.6,842.3"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="487.6,842.3 487.6,845.1 555.4,805.7 555.4,802.9"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="550.4,694 545.5,691.5 545.5,800.7 550.4,803.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="552.8,692.5 547.9,690.1 545.5,691.5 550.4,694"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="550.4,694 550.4,803.1 552.8,801.7 552.8,692.5"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="485.2,731.5 480.4,729 480.4,838.2 485.2,840.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="487.7,730.1 482.8,727.6 480.4,729 485.2,731.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="485.2,731.5 485.2,840.7 487.7,839.3 487.7,730.1"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="487.7,730.6 480.4,726.3 480.4,729.1 487.7,733.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="555.6,694 547.9,690.1 480.4,726.3 487.7,730.6"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="487.7,730.6 487.7,733.4 555.6,696.8 555.6,694"
                        />
                      </g>
                    </g>

                    <linearGradient
                      id="SVGID_2_"
                      gradientUnits="userSpaceOnUse"
                      x1="630.2493"
                      y1="730.1864"
                      x2="630.2493"
                      y2="843.5612"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#32ABD3" }} />
                      <stop offset="0.1824" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="0.5239" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8087" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="1" style={{ stopColor: "#83D4F6" }} />
                    </linearGradient>
                    <polygon
                      fill={corDaSala}
                      points="545.5,702.2 545.6,800.6 487.7,833.9 487.7,733.4"
                    />
                    <polygon
                      fill="#00000099"
                      points="545.5,702.2 545.6,702.2 487.7,733.4 487.7,733.4"
                    >
                      <animate
                        className="openWindows"
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        dur="500ms"
                        to="545.5,702.2 545.6,702.2 487.7,733.4 487.7,733.4"
                      />
                      <animate
                        className="closeWindows"
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        dur="500ms"
                        to="545.5,702.2 545.6,800.6 487.7,833.9 487.7,733.4"
                      />
                    </polygon>
                    <linearGradient
                      id="SVGID_3_"
                      gradientUnits="userSpaceOnUse"
                      x1="632.4388"
                      y1="699.082"
                      x2="632.4388"
                      y2="842.3934"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_3_)"
                      points="541.2,803.1 526.2,811.7 487.7,736.6 487.7,733.4 500.9,726.2"
                    />

                    <linearGradient
                      id="SVGID_4_"
                      gradientUnits="userSpaceOnUse"
                      x1="615.0368"
                      y1="689.5908"
                      x2="615.0368"
                      y2="792.4476"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_4_)"
                      points="545.5,733.4 545.6,770.4 518.1,717 532.8,709.1"
                    />

                    <linearGradient
                      id="SVGID_5_"
                      gradientUnits="userSpaceOnUse"
                      x1="628.9724"
                      y1="820.6649"
                      x2="628.9724"
                      y2="855.5789"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_5_)"
                      points="487.8,845.1 555.4,805.7 550.4,812.9 480.4,854 480.4,840.9"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="550.4,754.9 545.5,752.3 487.7,783.4 487.7,788.7"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="487.7,788.7 487.7,791.5 550.4,757.7 550.4,754.9"
                      />
                    </g>
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="588.2,784 580.9,779.8 581,782.6 588.2,786.8"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="656,744.7 648.3,740.8 580.9,779.8 588.2,784"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="588.2,784 588.2,786.8 656,747.4 656,744.7"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="651,635.7 646.1,633.2 646.1,742.4 651,744.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="653.4,634.3 648.5,631.8 646.1,633.2 651,635.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="651,635.7 651,744.9 653.4,743.4 653.4,634.3"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="585.8,673.2 580.9,670.8 580.9,779.9 585.8,782.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="588.3,671.8 583.4,669.3 580.9,670.8 585.8,673.2"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="585.8,673.2 585.8,782.4 588.3,781 588.3,671.8"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="588.2,672.3 581,668 581,670.8 588.3,675.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="656.2,635.7 648.5,631.8 581,668 588.2,672.3"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="588.2,672.3 588.3,675.1 656.2,638.5 656.2,635.7"
                        />
                      </g>
                    </g>

                    <linearGradient
                      id="SVGID_6_"
                      gradientUnits="userSpaceOnUse"
                      x1="529.6575"
                      y1="671.8983"
                      x2="529.6575"
                      y2="785.2731"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#32ABD3" }} />
                      <stop offset="0.1824" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="0.5239" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8087" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="1" style={{ stopColor: "#83D4F6" }} />
                    </linearGradient>
                    <polygon
                      fill={corDaSala}
                      points="646.1,643.9 646.2,742.3 588.3,775.6 588.3,675.1"
                    />

                    <polygon
                      fill="#00000099"
                      points="646.1,643.9 646.2,643.9 588.3,675.1 588.3,675.1"
                    >
                      <animate
                        className="openWindows"
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        dur="500ms"
                        to="646.1,643.9 646.2,643.9 588.3,675.1 588.3,675.1"
                      />
                      <animate
                        className="closeWindows"
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        dur="500ms"
                        to="646.1,643.9 646.2,742.3 588.3,775.6 588.3,675.1"
                      />
                    </polygon>
                    <linearGradient
                      id="SVGID_7_"
                      gradientUnits="userSpaceOnUse"
                      x1="531.847"
                      y1="640.7938"
                      x2="531.847"
                      y2="784.1053"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_7_)"
                      points="641.8,744.8 626.8,753.4 588.3,678.3 588.3,675.1 601.5,667.9"
                    />

                    <linearGradient
                      id="SVGID_8_"
                      gradientUnits="userSpaceOnUse"
                      x1="514.4449"
                      y1="631.3026"
                      x2="514.4449"
                      y2="734.1594"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_8_)"
                      points="646.1,675.1 646.2,712.1 618.7,658.7 633.4,650.8"
                    />

                    <linearGradient
                      id="SVGID_9_"
                      gradientUnits="userSpaceOnUse"
                      x1="528.3807"
                      y1="762.3767"
                      x2="528.3807"
                      y2="797.2907"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_9_)"
                      points="588.4,786.8 656,747.4 651,754.6 581,795.8 581,782.6"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="650.9,696.6 646.1,694 588.3,725.1 588.3,730.4"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="588.3,730.4 588.3,733.2 651,699.4 650.9,696.6"
                      />
                    </g>
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="384.3,900.7 377.1,896.5 377.1,899.3 384.4,903.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="452.2,861.3 444.5,857.4 377.1,896.5 384.3,900.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="384.3,900.7 384.4,903.5 452.2,864.1 452.2,861.3"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="447.1,752.4 442.2,749.9 442.2,859.1 447.1,861.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="449.5,750.9 444.7,748.5 442.2,749.9 447.1,752.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="447.1,752.4 447.1,861.5 449.5,860.1 449.5,750.9"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="382,789.9 377.1,787.4 377.1,896.6 382,899.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="384.4,788.5 379.5,786 377.1,787.4 382,789.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="382,789.9 382,899.1 384.4,897.7 384.4,788.5"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="384.4,788.9 377.1,784.7 377.1,787.5 384.4,791.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="452.3,752.4 444.6,748.5 377.1,784.7 384.4,788.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="384.4,788.9 384.4,791.7 452.3,755.2 452.3,752.4"
                        />
                      </g>
                    </g>

                    <linearGradient
                      id="SVGID_10_"
                      gradientUnits="userSpaceOnUse"
                      x1="733.5261"
                      y1="788.5814"
                      x2="733.5261"
                      y2="901.9562"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#32ABD3" }} />
                      <stop offset="0.1824" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="0.5239" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8087" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="1" style={{ stopColor: "#83D4F6" }} />
                    </linearGradient>
                    <polygon
                      fill={corDaSala}
                      points="442.2,760.6 442.3,858.9 384.4,892.2 384.4,791.7"
                    />
                    <polygon
                      fill="#00000099"
                      points="442.2,760.6 442.3,760.6 384.4,791.7 384.4,791.7"
                    >
                      <animate
                        className="openWindows"
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        dur="500ms"
                        to="442.2,760.6 442.3,760.6 384.4,791.7 384.4,791.7"
                      />
                      <animate
                        className="closeWindows"
                        fill="freeze"
                        attributeName="points"
                        begin="indefinite"
                        dur="500ms"
                        to="442.2,760.6 442.3,858.9 384.4,892.2 384.4,791.7"
                      />
                    </polygon>
                    <linearGradient
                      id="SVGID_11_"
                      gradientUnits="userSpaceOnUse"
                      x1="735.7156"
                      y1="757.4771"
                      x2="735.7156"
                      y2="900.788"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_11_)"
                      points="437.9,861.5 422.9,870.1 384.4,795 384.4,791.7 397.6,784.6"
                    />

                    <linearGradient
                      id="SVGID_12_"
                      gradientUnits="userSpaceOnUse"
                      x1="718.3137"
                      y1="747.9854"
                      x2="718.3137"
                      y2="850.8422"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_12_)"
                      points="442.2,791.8 442.3,828.8 414.8,775.3 429.5,767.5"
                    />

                    <linearGradient
                      id="SVGID_13_"
                      gradientUnits="userSpaceOnUse"
                      x1="732.2491"
                      y1="879.0598"
                      x2="732.2491"
                      y2="913.9736"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_13_)"
                      points="384.5,903.5 452.2,864.1 447.1,871.3 377.1,912.4 377.1,899.3"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="447.1,813.3 442.2,810.7 384.4,841.8 384.4,847.1"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="384.4,847.1 384.4,849.9 447.1,816.1 447.1,813.3"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <g enableBackground="new">
                        <g>
                          <polygon
                            fill="#9B9B9B"
                            points="203.1,850.5 209.2,846.9 209.2,849.3 203.1,852.8"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#FFFFFF"
                            points="52.7,767.7 59.2,764.4 209.2,846.9 203.1,850.5"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#F1F1F2"
                            points="203.1,850.5 203.1,852.8 52.7,770.1 52.7,767.7"
                          />
                        </g>
                      </g>
                      <g enableBackground="new">
                        <g>
                          <polygon
                            fill="#BBBDBF"
                            points="57,665.9 61.1,663.8 61.1,765.8 57,767.9"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#A5A5A5"
                            points="54.9,664.7 59,662.6 61.1,663.8 57,665.9"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#F1F1F2"
                            points="57,665.9 57,767.9 54.9,766.7 54.9,664.7"
                          />
                        </g>
                      </g>
                      <g enableBackground="new">
                        <g>
                          <polygon
                            fill="#BBBDBF"
                            points="205.1,747.1 209.2,745 209.2,847 205.1,849.1"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#A5A5A5"
                            points="203,745.9 207.1,743.8 209.2,745 205.1,747.1"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#F1F1F2"
                            points="205.1,747.1 205.1,849.1 203,847.9 203,745.9"
                          />
                        </g>
                      </g>
                      <g enableBackground="new">
                        <g>
                          <polygon
                            fill="#BBBDBF"
                            points="203,746.3 209.1,742.7 209.1,745.1 203,748.6"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#FFFFFF"
                            points="52.6,665.9 59,662.6 209.1,742.7 203,746.3"
                          />
                        </g>
                        <g>
                          <polygon
                            fill="#F1F1F2"
                            points="203,746.3 203,748.6 52.5,668.2 52.6,665.9"
                          />
                        </g>
                      </g>
                      <linearGradient
                        id="SVGID_14_"
                        gradientUnits="userSpaceOnUse"
                        x1="132.0027"
                        y1="709.0373"
                        x2="132.0027"
                        y2="855.9481"
                      >
                        <stop offset="0" style={{ stopColor: "#83D4F6" }} />
                        <stop
                          offset="0.1913"
                          style={{ stopColor: "#7CD0F3" }}
                        />
                        <stop
                          offset="0.4761"
                          style={{ stopColor: "#67C6EA" }}
                        />
                        <stop
                          offset="0.8176"
                          style={{ stopColor: "#47B5DC" }}
                        />
                        <stop offset="1" style={{ stopColor: "#32ABD3" }} />
                      </linearGradient>
                      <polygon
                        fill={corDaSala}
                        points="61.1,672.8 61,765.7 203,843.4 203,748.6"
                      />
                      <polygon
                        fill="#00000099"
                        points="61.1,672.8 61,672.8 203,748.6 203,748.6"
                      >
                        <animate
                          className="openWindows"
                          fill="freeze"
                          attributeName="points"
                          begin="indefinite"
                          dur="500ms"
                          to="61.1,672.8 61,672.8 203,748.6 203,748.6"
                        />
                        <animate
                          className="closeWindows"
                          fill="freeze"
                          attributeName="points"
                          begin="indefinite"
                          dur="500ms"
                          to="61.1,672.8 61,765.7 203,843.4 203,748.6"
                        />
                      </polygon>
                      <linearGradient
                        id="SVGID_15_"
                        gradientUnits="userSpaceOnUse"
                        x1="86.7025"
                        y1="665.9874"
                        x2="86.7025"
                        y2="773.6107"
                      >
                        <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                        <stop
                          offset="7.682818e-02"
                          style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                        />
                        <stop
                          offset="1"
                          style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                        />
                      </linearGradient>
                      <polygon
                        fill="url(#SVGID_15_)"
                        points="77.8,681.7 61,716.3 61,765.7 78.4,775.2 112.4,700.2"
                      />
                      <linearGradient
                        id="SVGID_16_"
                        gradientUnits="userSpaceOnUse"
                        x1="160.0199"
                        y1="709.8678"
                        x2="160.0199"
                        y2="818.356"
                      >
                        <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                        <stop
                          offset="7.682818e-02"
                          style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                        />
                        <stop
                          offset="1"
                          style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                        />
                      </linearGradient>
                      <polygon
                        fill="url(#SVGID_16_)"
                        points="125.1,800.8 160.2,820 194.9,744.3 160.2,725.7"
                      />
                    </g>
                    <linearGradient
                      id="SVGID_17_"
                      gradientUnits="userSpaceOnUse"
                      x1="130.9289"
                      y1="797.9607"
                      x2="130.9289"
                      y2="863.2194"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_17_)"
                      points="202.9,852.8 52.7,770.1 57,776.1 209.2,860.3 209.2,849.3"
                    />
                  </g>
                  <g>
                    <linearGradient
                      id="SVGID_18_"
                      gradientUnits="userSpaceOnUse"
                      x1="269.6279"
                      y1="756.0834"
                      x2="269.6279"
                      y2="962.7847"
                    >
                      <stop offset="0" style={{ stopColor: "#895733" }} />
                      <stop offset="0.2589" style={{ stopColor: "#835330" }} />
                      <stop offset="0.6212" style={{ stopColor: "#704628" }} />
                      <stop offset="1" style={{ stopColor: "#56341C" }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_18_)"
                      points="233.7,757.6 234.2,912.5 305.1,953.7 305.6,799.1"
                    />
                    <path
                      fill="#3E2615"
                      d="M246.2,779.3l46.9,27l-0.4,125.8l-46.1-26.8L246.2,779.3 M241,770.3l0.5,138l56.3,32.7l0.4-137.7
            L241,770.3L241,770.3z"
                    />
                    <g>
                      <polygon
                        fill="#004E52"
                        points="221.7,750.7 222.2,919.5 234.2,912.5 233.8,757.7"
                      />
                    </g>
                    <polygon
                      fill="#F1F1F2"
                      points="234.2,912.5 222.2,919.5 293,960.7 305,953.7"
                    />
                    <polygon
                      fill="#5D3820"
                      points="253.9,837.3 285.4,855.6 285.7,815.6 253.5,797.1"
                    />
                    <polygon
                      fill="#5D3820"
                      points="253.9,897.7 285.4,916 285.7,876 253.5,857.4"
                    />
                  </g>
                  <linearGradient
                    id="SVGID_19_"
                    gradientUnits="userSpaceOnUse"
                    x1="72.5182"
                    y1="538.8625"
                    x2="351.5842"
                    y2="817.9285"
                  >
                    <stop offset="0" style={{ stopColor: "#231F20" }} />
                    <stop
                      offset="1"
                      style={{ stopColor: "#231F20", stopOpacity: 0 }}
                    />
                  </linearGradient>
                  <polygon
                    opacity="0.2"
                    fill="url(#SVGID_19_)"
                    points="36.8,580.1 337.4,754.9 337.4,726.8 37.3,552.8"
                  />
                  <g enableBackground="new">
                    <g>
                      <polygon
                        fill="#A6A8AB"
                        points="336.8,683.1 716.2,460.7 716.1,504.9 336.7,727.3"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#BBBDBF"
                        points="0.1,487.3 379.5,264.9 716.2,460.7 336.8,683.1"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#EDEDEE"
                        points="336.8,683.1 336.7,727.3 0,531.5 0.1,487.3"
                      />
                    </g>
                  </g>
                  <g>
                    <polygon
                      fill="#004E52"
                      points="340.1,365 669,173.8 668.4,463.4 339.5,654.6"
                    />
                  </g>
                  <g>
                    <polygon
                      fill="#00787D"
                      points="40.1,191.8 369,0.6 669,173.8 340.1,365"
                    />
                  </g>
                  <g>
                    <polygon
                      fill="#006064"
                      points="340.1,365 339.5,654.6 39.5,481.4 40.1,191.8"
                    />
                  </g>
                  <polygon
                    fill="#004E52"
                    points="101.8,188.2 135.8,208 369.7,73.7 369.6,34.4"
                  />
                  <g>
                    <polygon
                      fill="#006064"
                      points="571.1,190.2 369.8,73.7 369.7,34.4 604.4,170.3"
                    />
                  </g>
                  <polygon
                    fill="#BBBDBF"
                    points="571.1,190.2 340.1,321.9 135.8,208 369.8,73.7"
                  />
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="135.7,472 143,467.8 143,470.6 135.7,474.8"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="67.9,432.6 75.6,428.7 143,467.8 135.7,472"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="135.7,472 135.7,474.8 67.9,435.4 67.9,432.6"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="73,323.7 77.8,321.2 77.8,430.4 73,432.8"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="70.5,322.2 75.4,319.8 77.8,321.2 73,323.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="73,323.7 73,432.8 70.5,431.4 70.5,322.2"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="138.1,361.2 143,358.7 143,467.9 138.1,470.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="135.6,359.8 140.5,357.3 143,358.7 138.1,361.2"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="138.1,361.2 138.1,470.4 135.6,469 135.6,359.8"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="135.7,360.2 142.9,356 142.9,358.8 135.7,363"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="67.7,323.7 75.4,319.8 142.9,356 135.7,360.2"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="135.7,360.2 135.7,363 67.7,326.5 67.7,323.7"
                        />
                      </g>
                    </g>
                    <linearGradient
                      id="SVGID_20_"
                      gradientUnits="userSpaceOnUse"
                      x1="106.6936"
                      y1="359.8775"
                      x2="106.6936"
                      y2="473.2523"
                    >
                      <stop offset="0" style={{ stopColor: "#83D4F6" }} />
                      <stop offset="0.1913" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="0.4761" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8176" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="1" style={{ stopColor: "#32ABD3" }} />
                    </linearGradient>
                    <polygon
                      fill={corDoQuarto1}
                      points="77.8,331.9 77.7,430.2 135.6,463.5 135.7,363"
                    />
                    <linearGradient
                      id="SVGID_21_"
                      gradientUnits="userSpaceOnUse"
                      x1="108.883"
                      y1="328.7732"
                      x2="108.883"
                      y2="472.0841"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_21_)"
                      points="82.1,432.8 97.1,441.4 135.7,366.3 135.7,363 122.4,355.9"
                    />
                    <linearGradient
                      id="SVGID_22_"
                      gradientUnits="userSpaceOnUse"
                      x1="91.4811"
                      y1="319.2816"
                      x2="91.4811"
                      y2="422.1383"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_22_)"
                      points="77.8,363.1 77.8,400.1 105.2,346.6 90.6,338.8"
                    />
                    <linearGradient
                      id="SVGID_23_"
                      gradientUnits="userSpaceOnUse"
                      x1="105.4168"
                      y1="450.3559"
                      x2="105.4168"
                      y2="485.2697"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_23_)"
                      points="135.5,474.8 67.9,435.4 73,442.6 143,483.7 143,470.6"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="73,384.6 77.8,382 135.6,413.1 135.6,418.4"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="135.6,418.4 135.6,421.2 73,387.4 73,384.6"
                      />
                    </g>
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="281,550 288.2,545.8 288.2,548.6 281,552.8"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="213.2,510.6 220.8,506.7 288.2,545.8 281,550"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="281,550 281,552.8 213.1,513.4 213.2,510.6"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="218.2,401.6 223.1,399.1 223.1,508.3 218.2,510.8"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="215.8,400.2 220.6,397.7 223.1,399.1 218.2,401.6"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="218.2,401.6 218.2,510.8 215.8,509.4 215.8,400.2"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="283.4,439.2 288.2,436.7 288.2,545.9 283.4,548.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="280.9,437.8 285.8,435.3 288.2,436.7 283.4,439.2"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="283.4,439.2 283.4,548.4 280.9,547 280.9,437.8"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="280.9,438.2 288.2,434 288.2,436.8 280.9,441"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="213,401.6 220.7,397.7 288.2,434 280.9,438.2"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="280.9,438.2 280.9,441 213,404.4 213,401.6"
                        />
                      </g>
                    </g>
                    <linearGradient
                      id="SVGID_24_"
                      gradientUnits="userSpaceOnUse"
                      x1="251.9621"
                      y1="437.85"
                      x2="251.9621"
                      y2="551.2248"
                    >
                      <stop offset="0" style={{ stopColor: "#83D4F6" }} />
                      <stop offset="0.1913" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="0.4761" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8176" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="1" style={{ stopColor: "#32ABD3" }} />
                    </linearGradient>
                    <polygon
                      fill={corDoQuarto1}
                      points="223.1,409.9 223,508.2 280.9,541.5 280.9,441"
                    />
                    <linearGradient
                      id="SVGID_25_"
                      gradientUnits="userSpaceOnUse"
                      x1="254.1514"
                      y1="406.7457"
                      x2="254.1514"
                      y2="550.0566"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_25_)"
                      points="227.4,510.7 242.4,519.4 280.9,444.3 280.9,441 267.7,433.9"
                    />
                    <linearGradient
                      id="SVGID_26_"
                      gradientUnits="userSpaceOnUse"
                      x1="236.7494"
                      y1="397.2543"
                      x2="236.7494"
                      y2="500.1111"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_26_)"
                      points="223.1,441.1 223,478.1 250.5,424.6 235.8,416.7"
                    />
                    <linearGradient
                      id="SVGID_27_"
                      gradientUnits="userSpaceOnUse"
                      x1="250.6853"
                      y1="528.3284"
                      x2="250.6853"
                      y2="563.2421"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_27_)"
                      points="280.8,552.8 213.1,513.4 218.2,520.6 288.2,561.7 288.2,548.6"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="218.2,462.5 223.1,460 280.9,491 280.9,496.3"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="280.9,496.3 280.9,499.1 218.2,465.3 218.2,462.5"
                      />
                    </g>
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="487.6,488.2 480.4,484 480.4,486.8 487.6,491"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="555.4,448.9 547.7,445 480.4,484 487.6,488.2"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="487.6,488.2 487.6,491 555.4,451.7 555.4,448.9"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="550.4,339.9 545.5,337.4 545.5,446.6 550.4,449.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="552.8,338.5 547.9,336 545.5,337.4 550.4,339.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="550.4,339.9 550.4,449.1 552.8,447.6 552.8,338.5"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="485.2,377.4 480.4,375 480.4,484.1 485.2,486.6"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="487.7,376 482.8,373.5 480.4,375 485.2,377.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="485.2,377.4 485.2,486.6 487.7,485.2 487.7,376"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="487.7,376.5 480.4,372.3 480.4,375.1 487.7,379.3"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="555.6,339.9 547.9,336 480.4,372.3 487.7,376.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="487.7,376.5 487.7,379.3 555.6,342.7 555.6,339.9"
                        />
                      </g>
                    </g>

                    <linearGradient
                      id="SVGID_28_"
                      gradientUnits="userSpaceOnUse"
                      x1="630.2493"
                      y1="376.1067"
                      x2="630.2493"
                      y2="489.4812"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#32ABD3" }} />
                      <stop offset="0.1824" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="0.5239" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8087" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="1" style={{ stopColor: "#83D4F6" }} />
                    </linearGradient>
                    <polygon
                      fill={corDoQuarto2}
                      points="545.5,348.1 545.6,446.5 487.7,479.8 487.7,379.3"
                    />

                    <linearGradient
                      id="SVGID_29_"
                      gradientUnits="userSpaceOnUse"
                      x1="632.4388"
                      y1="345.002"
                      x2="632.4388"
                      y2="488.3135"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_29_)"
                      points="541.2,449 526.2,457.6 487.7,382.5 487.7,379.3 500.9,372.1"
                    />

                    <linearGradient
                      id="SVGID_30_"
                      gradientUnits="userSpaceOnUse"
                      x1="615.0368"
                      y1="335.5108"
                      x2="615.0368"
                      y2="438.3676"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_30_)"
                      points="545.5,379.3 545.6,416.3 518.1,362.9 532.8,355"
                    />

                    <linearGradient
                      id="SVGID_31_"
                      gradientUnits="userSpaceOnUse"
                      x1="628.9724"
                      y1="466.5849"
                      x2="628.9724"
                      y2="501.4989"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_31_)"
                      points="487.8,491 555.4,451.7 550.4,458.9 480.4,500 480.4,486.8"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="550.4,400.8 545.5,398.2 487.7,429.3 487.7,434.6"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="487.7,434.6 487.7,437.4 550.4,403.6 550.4,400.8"
                      />
                    </g>
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="588.2,433.6 580.9,429.4 581,432.2 588.2,436.4"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="656,394.3 648.3,390.4 580.9,429.4 588.2,433.6"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="588.2,433.6 588.2,436.4 656,397.1 656,394.3"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="651,285.3 646.1,282.8 646.1,392 651,394.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="653.4,283.9 648.5,281.4 646.1,282.8 651,285.3"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="651,285.3 651,394.5 653.4,393 653.4,283.9"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="585.8,322.8 580.9,320.4 580.9,429.5 585.8,432"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="588.3,321.4 583.4,318.9 580.9,320.4 585.8,322.8"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="585.8,322.8 585.8,432 588.3,430.6 588.3,321.4"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="588.2,321.9 581,317.7 581,320.5 588.3,324.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="656.2,285.3 648.5,281.4 581,317.7 588.2,321.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="588.2,321.9 588.3,324.7 656.2,288.1 656.2,285.3"
                        />
                      </g>
                    </g>

                    <linearGradient
                      id="SVGID_32_"
                      gradientUnits="userSpaceOnUse"
                      x1="529.6575"
                      y1="321.5064"
                      x2="529.6575"
                      y2="434.8813"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#32ABD3" }} />
                      <stop offset="0.1824" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="0.5239" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8087" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="1" style={{ stopColor: "#83D4F6" }} />
                    </linearGradient>
                    <polygon
                      fill={corDoQuarto2}
                      points="646.1,293.5 646.2,391.9 588.3,425.2 588.3,324.7"
                    />

                    <linearGradient
                      id="SVGID_33_"
                      gradientUnits="userSpaceOnUse"
                      x1="531.847"
                      y1="290.4021"
                      x2="531.847"
                      y2="433.713"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_33_)"
                      points="641.8,394.4 626.8,403 588.3,327.9 588.3,324.7 601.5,317.5"
                    />

                    <linearGradient
                      id="SVGID_34_"
                      gradientUnits="userSpaceOnUse"
                      x1="514.4449"
                      y1="280.9108"
                      x2="514.4449"
                      y2="383.7676"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_34_)"
                      points="646.1,324.7 646.2,361.7 618.7,308.3 633.4,300.4"
                    />

                    <linearGradient
                      id="SVGID_35_"
                      gradientUnits="userSpaceOnUse"
                      x1="528.3807"
                      y1="411.9848"
                      x2="528.3807"
                      y2="446.8986"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_35_)"
                      points="588.4,436.4 656,397.1 651,404.3 581,445.4 581,432.2"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="650.9,346.2 646.1,343.6 588.3,374.7 588.3,380"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="588.3,380 588.3,382.8 651,349 650.9,346.2"
                      />
                    </g>
                  </g>
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#9B9B9B"
                          points="384.3,543.9 377.1,539.7 377.1,542.5 384.4,546.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="452.2,504.5 444.5,500.6 377.1,539.7 384.3,543.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="384.3,543.9 384.4,546.7 452.2,507.3 452.2,504.5"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="447.1,395.5 442.2,393 442.2,502.2 447.1,504.7"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="449.5,394.1 444.7,391.6 442.2,393 447.1,395.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="447.1,395.5 447.1,504.7 449.5,503.3 449.5,394.1"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="382,433.1 377.1,430.6 377.1,539.8 382,542.3"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#A5A5A5"
                          points="384.4,431.7 379.5,429.2 377.1,430.6 382,433.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="382,433.1 382,542.3 384.4,540.8 384.4,431.7"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBF"
                          points="384.4,432.1 377.1,427.9 377.1,430.7 384.4,434.9"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#FFFFFF"
                          points="452.3,395.5 444.6,391.6 377.1,427.9 384.4,432.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#F1F1F2"
                          points="384.4,432.1 384.4,434.9 452.3,398.3 452.3,395.5"
                        />
                      </g>
                    </g>

                    <linearGradient
                      id="SVGID_36_"
                      gradientUnits="userSpaceOnUse"
                      x1="733.5261"
                      y1="431.745"
                      x2="733.5261"
                      y2="545.1198"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#32ABD3" }} />
                      <stop offset="0.1824" style={{ stopColor: "#47B5DC" }} />
                      <stop offset="0.5239" style={{ stopColor: "#67C6EA" }} />
                      <stop offset="0.8087" style={{ stopColor: "#7CD0F3" }} />
                      <stop offset="1" style={{ stopColor: "#83D4F6" }} />
                    </linearGradient>
                    <polygon
                      fill={corDoQuarto2}
                      points="442.2,403.8 442.3,502.1 384.4,535.4 384.4,434.9"
                    />

                    <linearGradient
                      id="SVGID_37_"
                      gradientUnits="userSpaceOnUse"
                      x1="735.7156"
                      y1="400.6406"
                      x2="735.7156"
                      y2="543.9521"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_37_)"
                      points="437.9,504.6 422.9,513.3 384.4,438.2 384.4,434.9 397.6,427.8"
                    />

                    <linearGradient
                      id="SVGID_38_"
                      gradientUnits="userSpaceOnUse"
                      x1="718.3137"
                      y1="391.1494"
                      x2="718.3137"
                      y2="494.0061"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#FFFFFF" }} />
                      <stop
                        offset="7.682818e-02"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0.9232 }}
                      />
                      <stop
                        offset="1"
                        style={{ stopColor: "#FFFFFF", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_38_)"
                      points="442.2,434.9 442.3,472 414.8,418.5 429.5,410.6"
                    />

                    <linearGradient
                      id="SVGID_39_"
                      gradientUnits="userSpaceOnUse"
                      x1="732.2491"
                      y1="522.2234"
                      x2="732.2491"
                      y2="557.1371"
                      gradientTransform="matrix(-1 0 0 1 1146.8755 0)"
                    >
                      <stop offset="0" style={{ stopColor: "#231F20" }} />
                      <stop
                        offset="1"
                        style={{ stopColor: "#231F20", stopOpacity: 0 }}
                      />
                    </linearGradient>
                    <polygon
                      opacity="0.2"
                      fill="url(#SVGID_39_)"
                      points="384.5,546.7 452.2,507.3 447.1,514.5 377.1,555.6 377.1,542.5"
                    />
                    <g>
                      <polygon
                        fill="#FFFFFF"
                        points="447.1,456.4 442.2,453.8 384.4,484.9 384.4,490.2"
                      />
                    </g>
                    <g>
                      <polygon
                        fill="#E5E5E4"
                        points="384.4,490.2 384.4,493 447.1,459.2 447.1,456.4"
                      />
                    </g>
                  </g>
                  <linearGradient
                    id="SVGID_40_"
                    gradientUnits="userSpaceOnUse"
                    x1="135.756"
                    y1="128.069"
                    x2="390.1046"
                    y2="128.069"
                  >
                    <stop offset="0" style={{ stopColor: "#231F20" }} />
                    <stop
                      offset="0.8811"
                      style={{ stopColor: "#231F20", stopOpacity: 0.1189 }}
                    />
                    <stop
                      offset="1"
                      style={{ stopColor: "#231F20", stopOpacity: 0 }}
                    />
                  </linearGradient>
                  <polygon
                    opacity="0.2"
                    fill="url(#SVGID_40_)"
                    points="160.4,221.7 390.1,85.4 369.7,34.4 369.8,73.7 135.8,208"
                  />
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#EAEAEA"
                          points="306,132.1 306,136.3 342.8,157.7 342.8,153.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#8E9092"
                          points="342.8,153.5 342.8,157.7 410.4,118.7 410.4,114.5"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#CDCECF"
                          points="306,132.1 342.8,153.5 410.4,114.5 373.5,93.1"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBE"
                          points="312.5,115.4 312.5,132.1 342.8,149.8 342.8,133"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#8E9092"
                          points="342.8,133 342.8,149.8 403.9,114.5 403.8,97.8"
                        />
                      </g>
                      <g>
                        <g>
                          <polygon
                            fill="#EAEAEA"
                            points="312.5,115.4 342.8,133 403.8,97.8 373.5,80.2"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <linearGradient
                    id="SVGID_41_"
                    gradientUnits="userSpaceOnUse"
                    x1="333.9908"
                    y1="138.0834"
                    x2="410.0374"
                    y2="138.0834"
                  >
                    <stop offset="0" style={{ stopColor: "#231F20" }} />
                    <stop
                      offset="0.8811"
                      style={{ stopColor: "#231F20", stopOpacity: 0.1189 }}
                    />
                    <stop
                      offset="1"
                      style={{ stopColor: "#231F20", stopOpacity: 0 }}
                    />
                  </linearGradient>
                  <polygon
                    opacity="0.2"
                    fill="url(#SVGID_41_)"
                    points="410.4,118.5 342.8,157.7 369.7,157.7 437.3,118.5"
                  />
                  <linearGradient
                    id="SVGID_42_"
                    gradientUnits="userSpaceOnUse"
                    x1="385.9944"
                    y1="172.6585"
                    x2="471.3549"
                    y2="172.6585"
                  >
                    <stop offset="0" style={{ stopColor: "#231F20" }} />
                    <stop
                      offset="0.8811"
                      style={{ stopColor: "#231F20", stopOpacity: 0.1189 }}
                    />
                    <stop
                      offset="1"
                      style={{ stopColor: "#231F20", stopOpacity: 0 }}
                    />
                  </linearGradient>
                  <polygon
                    opacity="0.2"
                    fill="url(#SVGID_42_)"
                    points="469.7,153.1 402.1,192.3 429,192.3 496.6,153.1"
                  />
                  <g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#EAEAEA"
                          points="365.3,166.7 365.3,170.9 402.1,192.3 402.1,188.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#8E9092"
                          points="402.1,188.1 402.1,192.3 469.7,153.2 469.7,149.1"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#CDCECF"
                          points="365.3,166.7 402.1,188.1 469.7,149.1 432.8,127.7"
                        />
                      </g>
                    </g>
                    <g enableBackground="new">
                      <g>
                        <polygon
                          fill="#BBBDBE"
                          points="371.8,150 371.8,166.7 402.1,184.3 402.1,167.6"
                        />
                      </g>
                      <g>
                        <polygon
                          fill="#8E9092"
                          points="402.1,167.6 402.1,184.3 463.2,149.1 463.1,132.4"
                        />
                      </g>
                      <g>
                        <g>
                          <polygon
                            fill="#EAEAEA"
                            points="371.8,150 402.1,167.6 463.1,132.4 432.8,114.7"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}
