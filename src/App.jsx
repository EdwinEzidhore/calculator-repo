import React, {  useState } from 'react'
import './App.css'


function App() {

  const [number, setnumber] = useState('')
  const [expression,setexpression]=useState('')


  const toglenumber = (e) => {
    setnumber(number + e.target.value)
  }

  const result = () => {
    const expression = number;
    setexpression(expression)
    const result = eval(expression)
    setnumber(result)
 


  }
  const clear = () => {
    setnumber("")
    setexpression("")
  }
 
  const back = () => {
   setnumber(number.slice(0,-1))
  }

  return (
    <div className='wrapper'>
      <div className='sub-wrapper'>
        <div className='output-screen'>
          <div className='inpu-expr'>{expression}</div>
          <div className='input-no'>{ number}</div>
        </div>
        
      <div className='button-wrapper'>
      <div className='first-row'>
        <button className='but-clear'onClick={clear}>C</button>
        <button className='but-mod' value={'%'} onClick={toglenumber}>%</button>
        <button className='but-back' onClick={back}><i class='bx bx-arrow-back'></i></button>
        <button className='but-div' value={"/"} onClick={toglenumber}>/</button>
      </div>
      <div className='sec-row'>
        <button value={7} onClick={toglenumber}>7</button>
        <button value={8} onClick={toglenumber}>8</button>
        <button value={9} onClick={toglenumber}>9</button>
        <button className='but-mul' value={'*'} onClick={toglenumber}>x</button>
      </div>
      <div>
        <button value={4} onClick={toglenumber}>4</button>
        <button value={5} onClick={toglenumber}>5</button>
        <button value={6} onClick={toglenumber}>6</button>
        <button className='but-dif' value={'-'} onClick={toglenumber}>-</button>
      </div>
      <div>
        <button value={1} onClick={toglenumber}>1</button>
        <button value={2} onClick={toglenumber}>2</button>
        <button value={3} onClick={toglenumber}>3</button>
          <button className='but-plus' value={'+'} onClick={toglenumber}>+</button>
      </div>
      <div>
        <button value={0} onClick={toglenumber}>0</button>
        <button value={"."} onClick={toglenumber}>.</button>
          <button className='but-res' onClick={()=>result()}>=</button>
      </div>

      </div>

      </div>
   

     

      

    </div>
  )
}

export default App
