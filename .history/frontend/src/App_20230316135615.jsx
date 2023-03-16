import { useState } from "react"
import "./App.css"
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen mx-auto bg-[#2b3137]">
      <div className="flex flex-col w-10/12 h-1/2 p-4 space-y-4 text-white bg-[#1e2227] rounded-lg">

      </div>
    </div>
  )
}

export default App
