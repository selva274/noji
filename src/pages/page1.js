import React, { createContext, useCallback, useState } from 'react'
import Page2 from './page2';
export const UserContext=createContext()
export default function Page1() {
    const [user,setUser]=useState('Selva');
    const changeUser=useCallback(()=>{
      setUser("Kumar");
    })
  return (
    <UserContext.Provider value={user}>
        <h1>{user}</h1>
        <Page2 changeUser={changeUser}/>
    </UserContext.Provider>
  )
}
