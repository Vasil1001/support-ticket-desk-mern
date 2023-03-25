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
