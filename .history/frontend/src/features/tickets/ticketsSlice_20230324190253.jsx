import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ticketsService from './ticketsService'

const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        reset: (state) => initialState // ? Take current state and reset to initial state above
    }
})