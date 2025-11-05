import React from 'react'
import { UserData } from './store.jsx'
import Profile from './assets/profile.jsx'
import Signin from './assets/signin.jsx'

export default function App() {
  const name=UserData((state)=> state.name)
  return (
    <div>
     { name ? <Profile/> :<Signin/>}
    </div>
  )
}
