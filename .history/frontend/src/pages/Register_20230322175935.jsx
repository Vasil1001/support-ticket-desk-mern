import React, { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { Card, Text } from "@tremor/react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { register, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
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

    if (password !== password2) {
      toast.error("Passwords do not match")
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
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
  }

  return (
    <div className="flex flex-col min-h-screen mx-auto items-center mt-24">
      <Card
        decoration="top"
        decorationColor="indigo"
        className="max-w-md mt-3 shadow-md"
      >
        <h1 className="flex font-bold text-4xl gap-3">
          <FaUser /> Register
        </h1>
        <p className="text-gray-500 text-lg">Please create an account</p>
        <form onSubmit={onSubmit}>
          <label className="block font-bold text-gray-600 mt-3 mb-1">
            Name
          </label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Enter a name"
            required
          />

          <label className="block font-bold text-gray-600 mb-1">Email</label>
          <input
            type="text"
            className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter an email"
            required
          />
          <div>
            <label className="block font-bold text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter a password"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute right-3 mb-3 mr-6 cursor-pointer"
              onClick={() => showHidePassword()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          
            <label className="block font-bold text-gray-600 mb-1">
              Confirm Password
            </label>
            <div className="flex items-center ">
            <input
              type="password"
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm password"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute right-3 mb-3 mr-6 cursor-pointer"
              onClick={() => showHidePassword()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          </div>
          <button className="w-full text-white px-3 p-2 bg-indigo-700 rounded-md mt-2">
            Register
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-2xl ">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button className="w-full text-white px-3 p-2 bg-green-700 rounded-md">
            Login
          </button>
        </form>
      </Card>
    </div>
  )
}
