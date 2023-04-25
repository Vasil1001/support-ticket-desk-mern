import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NewTicket from "./pages/NewTicket"
import PrivateRoute from "./components/PrivateRoute"
import Tickets from "./pages/Tickets"
import Ticket from "./pages/Ticket"

function App() {
  const [count, setCount] = useState(0)
  // bg-[#2b3137] text-slate-200
  //8CADDA dde8ed 739bd0 96b4d4 C0d5eb

  return (
    <>
      <Router>
        <div className="min-w-screen min-h-screen h-screen-vh bg-gradient-to-br from-cyan-50 via-[#dde8ed] to-cyan-100 bg-[#dde8ed]">
          <Header />
          <div className="mx-auto px-5 justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/new-ticket" element={<PrivateRoute />}>
                <Route path="/new-ticket" element={<NewTicket />} />
              </Route>
              <Route path="/tickets" element={<PrivateRoute />}>
                <Route path="/tickets" element={<Tickets />} />
              </Route>
              <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
                <Route path="/ticket/:ticketId" element={<Ticket />} />
              </Route>
            </Routes>
          </div>
        </div>
      </Router>

      
    </>
  )
}

export default App
