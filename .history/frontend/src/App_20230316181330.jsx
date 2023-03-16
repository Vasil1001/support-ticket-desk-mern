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
      <Router>
          <div className="flex flex-col mx-auto min-w-screen min-h-screen h-screen-vh bg-slate-50">

        <Header />
        <hr className="border-gray-300 mx-5 mb-3" />

        {/* <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="flex-shrink mx-4 text-4xl text-[#ffd43b]">Content</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div> */}
        <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
    </div>

      </Router>
  )
}

export default App
