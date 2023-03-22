import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user}
  return (
    <>
      <header className="mx-5 flex justify-between gap-5 py-4">
        <Link to="/">
          <div className="rounded-md px-3 py-2 font-bold hover:bg-slate-500 hover:text-white hover:shadow-md">
            Support Desk
          </div>
        </Link>
        <div className="flex gap-2">
          <Link to="/login">
            <div className="rounded-md px-3 py-2 font-bold hover:bg-slate-500 hover:text-white hover:shadow-md">
              Login
            </div>
          </Link>

          <Link to="/register">
            <div className="rounded-md px-3 py-2 font-bold hover:bg-slate-500 hover:text-white hover:shadow-md">
              Register
            </div>
          </Link>
        </div>
      </header>
      <hr className="mx-5 mb-3 border-gray-300" />
    </>
  )
}

export default Header
