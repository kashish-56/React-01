import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(30)
  const [user, setuser] = useState('Radha')

  return (
    <div>
      <h1>Username is {user}</h1>
      <h2>Value of a is {a}</h2>
      <button onClick={() =>{
        setA(a+10)
        setuser('Krishna')
        }} >Click</button>
    </div>
  )
}

export default App