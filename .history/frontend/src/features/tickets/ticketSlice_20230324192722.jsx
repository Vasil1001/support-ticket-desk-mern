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

// * Create new ticket
export const createTicket = createAsyncThunk(
  "tickets/create",
  async (ticketData, thunkAPI) => {
    try {
      return await ticketService.register(user)
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
