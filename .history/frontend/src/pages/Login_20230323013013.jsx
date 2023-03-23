import React, { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { Card, Text } from "@tremor/react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { login, reset } from "../features/auth/authSlice"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password } = formData

  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisible = () => {
    setPasswordShown(passwordShown ? false : true)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
    .unwrap()
    .then((user) => {
      // NOTE: by unwrapping the AsyncThunkAction we can navigate the user after
      // getting a good response from our API or catch the AsyncThunkAction
      // rejection to show an error message
      toast.success(`Registered new user - ${user.name}`)
      navigate("/")
    })
    .catch(toast.error)

  }

  return (
    <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <Card
        decoration="top"
        decorationColor="indigo"
        className="max-w-md mt-3 shadow-md"
      >
        <h1 className="flex font-bold text-4xl gap-3">
          <FaSignInAlt /> Login
        </h1>
        <p className="text-gray-500 text-lg">Please login to continue</p>
        <form onSubmit={onSubmit}>
          <label className="block font-bold text-gray-600 mt-3 mb-1">
            Email
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />

          <label className="block font-bold text-gray-600 mb-1">Password</label>
          <div className="flex items-center ">
            <input
              type={passwordShown ? "text" : "password"}
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter your password"
              required
            />
            {passwordShown ? (
              <EyeSlashIcon
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-3 mb-3 mr-6 text-gray-500 hover:text-gray-800 cursor-pointer"
                onClick={() => togglePasswordVisible()}
              />
            ) : (
              <EyeIcon
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-3 mb-3 mr-6 text-gray-500 hover:text-gray-800 cursor-pointer"
                onClick={() => togglePasswordVisible()}
              />
            )}
          </div>

          <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md mt-2">
            Login
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-2xl ">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button className="w-full text-white px-3 p-2 bg-indigo-700 rounded-md ">
            Register
          </button>
        </form>
      </Card>
    </div>
  )
}
