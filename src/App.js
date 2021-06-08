import React, {useState, useEffect} from "react";
import "./style.css";
import Input from './Input'

export default function App() {

  let [ce,setCe]=useState('');
 let [fa,setFa]=useState('');
 let [ke,setKe]=useState('');
  
  const calculate=(e)=>{
  let targetval=parseInt(e.target.value);
  if(e.target.id=='c'){
  setCe(targetval);
  setFa((targetval*9/5)+32);
  setKe(targetval+273.15)
  
  } 
  else if(e.target.id=='f'){
  setFa(targetval);
  setCe((targetval-32)*5/9);
  setKe(((targetval-32)*5/9)+273.15);
    
  }
    else if(e.target.id=='k'){
  setKe(targetval);
  setCe(targetval-273.15);
  setFa(((targetval-273.15)*9/5)+32);
    
  }
  
  }
 
  return (
    
    <div>
     <Input id={'c'} value={ce} change={calculate} />
     <Input id={'f'} value={fa} change={calculate} />
     <Input id={'k'} value={ke} change={calculate} />
    </div>
  );
}
