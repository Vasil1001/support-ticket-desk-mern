import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getNotes).pending
    }
})
createSlice
createAsyncThunk
noteService