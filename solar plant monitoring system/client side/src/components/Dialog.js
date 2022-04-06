import React from "react";
import Button from "./Button";
const customStyles = {
    position: 'absolute',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    padding: "20px"
};

function Dialog(props) {

if (!props.show) {
    return(<></>)
}

  return (
    <div className='modalBox'>
<div style={customStyles}>
      <p>Da li ste sigurini da zelite prekinuti isporuku</p>
       <Button color={'red'} name="Potvrdi" onclick={props.onConfirm}/>
       <Button color={'green'} name="Odustani" onclick={props.onCancel} />
    </div>
    </div>
    
  );
}

export default Dialog;
