import React, { useState } from 'react'
import { UserData } from './store.jsx';

export default function Signin() {
    const [inputname , setInputname] =useState('');
    const setName= UserData((state)=>state.setName)

    function handledatastore(){
        setName(inputname)
    }
  return (
    <div>
      <input value={inputname} placeholder='Enter your name..' onChange={(e)=> setInputname(e.target.value)}></input>
      <button onClick={handledatastore}>Sign in</button>
    </div>
  )
}
