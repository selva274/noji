import { useEffect } from 'react';
import { useState } from 'react'
const useFetch=(url)=> {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>
        { console.log(data);
          setData(data.results)})        
        .catch((e)=>alert("Error"))
    },[url]);
    return [data]
  }
export default useFetch;
