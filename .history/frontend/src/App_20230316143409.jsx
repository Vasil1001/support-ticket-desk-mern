import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <h1 className="flex bg-[#2b3137] font-bold justify-center text-4xl pt-5 text-[#ffd43b]">HOME</h1>

        <div className="flex flex-col items-center justify-center h-screen mx-auto bg-[#2b3137]">
          <h1>HOME</h1>
          
          <div className="flex flex-col w-10/12 h-1/2 p-4 space-y-4 text-white bg-[#1e2227] rounded-lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
