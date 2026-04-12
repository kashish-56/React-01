import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')

  const formHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', text);
    setText('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        formHandler(e)
      }}>
        <input type="text" value={text} name='textbox' placeholder='Enter your name' onChange={(e) =>{
          setText(e.target.value);
        }}/>
        <button type='submit'>Click</button>
      </form>
    </div>
  )
}

export default App