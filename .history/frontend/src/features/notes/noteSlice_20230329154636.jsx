import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    extraReducers: (builder) => {}
})
createSlice
createAsyncThunk
noteService