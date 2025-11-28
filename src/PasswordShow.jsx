
import React, { useState } from 'react'

const PasswordShow = () => {
  const[showPass , setshowPass]= useState(false);
  console.log(showPass,"line5")

  return (
    <>
    <div>PasswordShow</div>
    <input type={showPass?"text":"password"}></input>
    <button onClick={()=>setshowPass(!showPass)}>{showPass?"Hide":"Show"}</button>
    </>
  )
}

export default PasswordShow
