import { useState } from "react"
import "./index.css"

function App() {
  const name = "Sana Ullah Siddiqui"

  const [a, seta] = useState(10)
  const abc = () => {
    seta(Math.floor(Math.random() * 100))
  }

  const [num, setNum] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
      
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        Hello World
      </h1>
      <h2 className="text-xl mb-6">Not Hello World</h2>

      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full mb-6">
        <p className="text-lg font-semibold mb-4">
          My name is <span className="text-indigo-600">{name}</span> and I am {abc}
          <span className="font-bold text-purple-600">{a}</span> years old.
        </p>
        <button
          onClick={abc}
          className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-md transition"
        >
          Change Anything
        </button>
      </div>

      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">
          Increase And Decrease Numbers: {" "}
          <span className="text-indigo-600">{num}</span>
        </h1>
        <div className="flex gap-4">
          <button
            className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md transition"
            onClick={() => setNum(num + 2)}
          >
            Increment
          </button>
          <button
            className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-md transition"
            onClick={() => setNum(num - 2)}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
