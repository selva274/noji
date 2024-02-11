import React, { memo, useContext } from 'react'
import { UserContext } from './page1';
import Page3 from './page3';

function Page2({changeUser}) {
  return (
    <>
       <button onClick={changeUser}>Change_User</button>
       <Page3/>
    </>
  ) 
}
export default memo(Page2);