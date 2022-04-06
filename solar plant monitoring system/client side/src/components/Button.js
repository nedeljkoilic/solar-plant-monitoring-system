import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
function Button(props) {
    return ( 
        <button onClick={props.onclick} style={{backgroundColor: props.color}} className='button'>{props.name}</button>
     );
}

export default Button;