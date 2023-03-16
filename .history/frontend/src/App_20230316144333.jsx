import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#2b3137] text-white">
      <Router>
        <Header />
        <h1 className="flex font-bold justify-center text-4xl pt-5 text-[#ffd43b]">
          HOME
        </h1>
        <div className="flex flex-col items-center justify-center h-screen mx-auto">
          <h1>HOME</h1>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">Content</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>
          <div className="flex flex-col w-10/12 h-1/2 p-4 space-y-4 text-white bg-[#1e2227] rounded-lg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
