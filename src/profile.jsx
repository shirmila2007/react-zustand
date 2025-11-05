import React, { useState } from 'react'
import { UserData } from './store.jsx'

export default function Profile() {
    const name= UserData((state)=> state.name)
    const setName=UserData((state)=> state.setName)
    const [newName , setNewname]=useState('')
function changename(){
    setName(newName)
}

  return (
    <div>
        <input value={newName} placeholder='Enter the name to change' onChange={(e)=>setNewname(e.target.value)}></input>
        <button onClick={changename}>Change name</button>
      
    </div>
  )
}
