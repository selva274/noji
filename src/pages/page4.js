import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Page4=()=> {
    const [data,setData]=useState(null);
    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=100")
        .then((res)=>res.json())
        .then((data)=>setData(data.results))
        .catch((e)=>alert("Error"))
    },[]);
  return (
    <>
            {
                data && data.map((item)=>{
                    return <p key={item.id}>{item.email}</p>
                })
            }
    </>
  )
};
export default Page4;
