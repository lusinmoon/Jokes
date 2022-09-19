import {useState, useRef, createRef} from "react"
import Apps from "./App.css"


const App=()=> {

  const [input,setInput]=useState([])
  const inputRef = createRef()
  
  const  setJokes = (e)=>{
    input.push(e.target.value)
    console.log(input)

  }

  const click=(e)=>{
    console.log(inputRef)
  }

  
//  fetch("https://v2.jokeapi.dev/joke/" + "Custom" 



  return (
    <div className="App">
      <div className="category">
      <p>Select category / categories:</p>
           <span>Any   <input ref={inputRef} name={"category"} value="Any" onClick={setJokes} type={"radio"}></input></span>
          <div className="c">
               <span>Custom: <input value="Custom" onClick={setJokes} name={"category"} type={"radio"}></input>   </span>
               <span>Programming</span><input value="Programming" onClick={setJokes} type={"checkbox"}></input>
               <span>Spooky</span><input value="Spooky" onClick={setJokes} type={"checkbox"}></input>
               <span>Christmas</span><input value="Christmas" onClick={setJokes} type={"checkbox"}></input>
           </div>
           </div>
           
      <div className="category">

              <p>Select flags to blacklist:</p>
          <div className="c">
               <span>nsfw</span><input value="nsfw" onClick={setJokes} type={"checkbox"}></input>
               <span>political</span><input onClick={setJokes} value="political" type={"checkbox"}></input>
               
      </div>
       </div>
       <div className="category">
       <p>Amount of jokes:</p>
       <input type={"number"}  max={"10"}></input>

          <button onClick={click}>CLICK ME</button>
       </div>
    </div>
  );
}

export default App;
