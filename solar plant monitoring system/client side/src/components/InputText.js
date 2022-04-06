import React from "react";
import "./style.css";
function InputText(props) {
  return (
    <input
      type={props.tip}
      placeholder={props.placeholder}
      className="input"
      required
    ></input>
  );
}

export default InputText;
