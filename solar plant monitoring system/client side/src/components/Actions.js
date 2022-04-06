import React, {useState} from "react";
import Button from "./Button";
import axios from "axios";
import Dialog from './Dialog';
function Actions() {
  const [show, setShow]= useState(false)
  const shutdown = ()=>{
    axios.get('http://localhost:9000/shutdown').then(resp=>{
      console.log(resp);
    });
    console.log('pozvan aksios');
    setShow(false);
  }
 const onCancel = ()=>{
   setShow(false);
 }
  return (
    
    <div style={{ marginTop: "95px" }}>
      <div className="App">
        <div className="login">
          <h1 className="prijavaHeding">Odaberi akciju</h1>
          <hr />
          <Button onclick={()=>setShow(true)} color={"red"} name="Prekid isporuke" />
        </div>
      </div>
      <Dialog show={show} onCancel={onCancel} onConfirm={shutdown}/>
    </div>
  );
}

export default Actions;
