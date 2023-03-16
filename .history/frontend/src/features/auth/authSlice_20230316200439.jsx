import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isError: false,
    isSuccessful: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice