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

export const ticketsSlice = 