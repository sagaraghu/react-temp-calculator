import React, {useState} from "react";


export default function Input(props) {
const xyz=(e)=>{
e.preventDefault();
props.change(e);


}

  
  return (
    <div>
      <input type="number" id={props.id} value={props.value} onChange={xyz}/>
    </div>
  );
}

