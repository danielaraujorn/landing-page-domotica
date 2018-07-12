import React from "react";
import Slider from "material-ui/Slider";

export default props => (
  <div>
    {props.tag ? (
      <div style={{ padding: "0 10px" }}>
        <p style={{ margin: 0, fontSize: 12 }}>{props.tag + ":"}</p>
      </div>
    ) : null}
    <div style={{ display: "flex", padding: "0 10px" }}>
      {props.leftIcon || null}
      {/* <ActionViewList style={{ margin: '21px 5px' }} /> */}
      <Slider
        style={{ width: "100%" }}
        className="sliderIntensidade"
        min={Number(props.min) || 0}
        max={Number(props.max) || 100}
        disableFocusRipple={true}
        step={Number(props.step) || 1}
        value={Number(props.value) || 0}
        onChange={(e, value) => props.onChange(value)}
      />
      {props.rightIcon || null}
      {/* <ContentCreate style={{ margin: '21px 5px' }} /> */}
    </div>
  </div>
);
