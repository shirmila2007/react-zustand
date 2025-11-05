import React from 'react'
import { UserData } from './store.jsx'
import Profile from './profile.jsx'
import Signin from './signin.jsx'

export default function App() {
  const name=UserData((state)=> state.name)
  return (
    <div>
     { name ? <Profile/> :<Signin />}
    </div>
  )
}
