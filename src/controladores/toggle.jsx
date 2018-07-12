import React from "react";
import Toggle from "material-ui/Toggle";

export default props => (
  <div
    style={{
      margin: 5,
      marginRight: 14,
      display: "inline-block"
    }}
  >
    <Toggle
      label={props.tag || null}
      inputStyle={{ margin: "auto" }}
      onToggle={(e, value) => props.onChange(Boolean(value) || false)}
      value={Boolean(props.value) || false}
    />
  </div>
);
