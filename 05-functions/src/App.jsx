import React from 'react'

const App = () => {

  return (
    <div>
      <div id='page1'>
        <input type="text" placeholder="Type something..." onChange={(e) => console.log(e.target.value)}/>
      <button className="btn btn-primary" onClick={()=>{
        console.log('Button Clicked');
        
      }}>Click me</button>

      <button onDoubleClick={()=>{
        console.log('Button Double Clicked');
        
      }}>Login</button>
      </div>
      <div id='page2' onMouseMove={()=>{
        console.log('radhe radhe......');
        
      }}></div>
      <div id='page3'></div>
    </div>
  )
}

export default App
