import {useState} from 'react'
import './style.scss'

const App = () => {
  const [data,setData]=useState("")
  const ops = ["/","*","+","-","%"]

  

  function click(e){

    if( ops.includes(e.target.innerText) && data === "" ||
    ops.includes(e.target.innerText) &&  ops.includes(data.slice(-1))){
      return;
    }
    switch(e.target.innerText){
      case 'Clear': setData("")
      break;
      case "=" : setData(eval(data))
      break;


      
      

      default:  
            setData(data + e.target.innerText)

    }
    console.log(data)

  }


  return (
    <div className='container'>
    <div className='window'>{data}</div>
    <div onClick={click} className='number' >
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button>/</button>
      <button>*</button>
      <button>=</button>
      <button>%</button>
      <button>Clear</button>
    </div>
    </div>
  )}


export default App