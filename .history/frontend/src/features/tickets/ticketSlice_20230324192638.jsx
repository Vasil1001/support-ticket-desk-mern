import React from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ticketService from "./ticketService"

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

// * Register new user
export const register = createAsyncThunk(
    "auth/register",
    async (user, thunkAPI) => {
      try {
        return await authService.register(user)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
  
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    reset: (state) => initialState, // ? Take current state and reset to initial state above
  },
  extraReducers: (builder) => {},
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
