import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)
// bg-[#2b3137] text-slate-200
  return (
    <div className="bg-[#2b3137] text-slate-200">
      <Router>
        <Header />
        <hr className="border-gray-600 mx-5" />

        <h1 className="flex font-bold justify-center text-4xl pt-5 text-[#ffd43b]">
          HOME
        </h1>
        {/* <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-4xl text-[#ffd43b]">Content</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div> */}
        <div className="flex flex-col items-center justify-center h-screen mx-auto bg-[#2b3137]">
          <h1>CARD ABOVE</h1>

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
