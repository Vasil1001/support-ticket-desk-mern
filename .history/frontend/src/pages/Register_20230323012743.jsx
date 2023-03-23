import React, { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { Card, Text } from "@tremor/react"
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { register, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { EyeIcon } from "@heroicons/react/24/outline"
import { EyeSlashIcon } from "@heroicons/react/24/outline"
import Spinner from "../components/Spinner"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })

  const { name, email, password, password2 } = formData
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisible = () => {
    setPasswordShown(passwordShown ? false : true)
  }

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

  if (isLoading) {
    return <Spinner />
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

          <label className="block font-bold text-gray-600 mb-1">Password</label>
          <div className="flex items-center ">
            <input
              type={passwordShown ? "text" : "password"}
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter a password"
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

          <label className="block font-bold text-gray-600 mb-1">
            Confirm Password
          </label>
          <div className="flex items-center ">
            <input
              type={passwordShown ? "text" : "password"}
              className="border-2 border-gray-300 p-2 rounded-md w-full mb-3"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm password"
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
          <button className="w-full text-white px-3 p-2 bg-indigo-700 hover:bg-indigo-600 rounded-md mt-2">
            Register
          </button>

          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="flex-shrink mx-4 text-2xl ">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <button className="w-full text-white px-3 p-2 bg-green-700 hover:bg-green-600 rounded-md">
            Login
          </button>
        </form>
      </Card>
    </div>
  )
}
