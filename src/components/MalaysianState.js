import React from "react";

const MalaysianState = (props) => {
  return (
    <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState}>
      <title>{props.stateName}</title>
    </path>
  );
}
export default MalaysianState;
