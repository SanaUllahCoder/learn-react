import { useState } from "react"
import "./index.css"

function App() {

  const name = "Sana Ullah Siddiqui"
  // let a = 18

  const [a, seta] = useState(10)
  const abc =() =>{
    seta (Math.floor(Math.random() *100))
    // seta(20)
  }

  const [num, setNum] = useState(0)


  return <div>
    <h1 className="text-5xl bg-red-600">Hello World</h1>
    <h1>Not Hello World</h1>
    <p>My name is {name} and I am {a} years old.</p>
    <button onClick={abc}>Change anything</button>

    <h1>Increase And Decrease Numbers {num}</h1>

    <button onClick={() => setNum(num +2)}>Increment</button>
    <button onClick={() =>setNum(num -2)}>Decrement</button>
    
  </div>
}

export default App