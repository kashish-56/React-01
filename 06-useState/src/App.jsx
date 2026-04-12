import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user: 'Radha', age: 25})
  const [num2, setNum2] = useState([10,20,30])
  const [num3, setNum3] = useState('Hare Krishna! ')

  const btnClicked = () => {
      const newNum = {...num};
      newNum.age = 26;
      newNum.user = 'Krishna';
      setNum(newNum);
  }
  
  const btnClicked2 = () => {
      const newNum2 = [...num2];
      newNum2[0] = 1;
      newNum2[1] = 2;
      newNum2[2] = 3;
      newNum2.push(4);
      setNum2(newNum2);
  }
  const btnClicked3 = () => {
      setNum3(() => 'Hare Krishna Hari Bol !');
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      <h2>{num2.join(', ')}</h2>
      <button onClick={btnClicked2}>touch me</button>
      <button onClick={btnClicked3}>{num3}</button>
    </div>
  )
}

export default App