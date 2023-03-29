import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getNotes.pending, (state) => {
            // NOTE: reset notes to null on pending so we can show a Spinner while
            // fetching notes
            state.notes = null
          })
    }
})
createSlice
createAsyncThunk
noteService

export default noteSlice.reducer