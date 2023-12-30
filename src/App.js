import { useEffect, useMemo, useRef, useState } from 'react'
import Page1 from './pages/page1';
import Page4 from './pages/page4';
function calculation(value){
  return value+1;
}
export default function App() {  
  const inputValue=useRef(0);
  const [value,setValue]=useState(0);
  const calculation_main=useMemo(()=>calculation(value),[value]);
  function justFocus(){
    inputValue.current.style.color='blue';
  }
  useEffect(()=>{
    setValue(value+1);
  },[]);
  function changeStae(){
    setValue(value+1);
  }
  const memo_value=calculation(value);
  return (
    <>
    <h1>Context :</h1>
        <Page1/>
    <h1>useState : {value}</h1>
    <h1 ref={inputValue}>useRef : Selva</h1>
    <p>useMemo : {memo_value}</p>
    <button onClick={justFocus}>Focus</button>
    <button onClick={changeStae}>useState</button>
    <Page4/>
    </>
  )
}
