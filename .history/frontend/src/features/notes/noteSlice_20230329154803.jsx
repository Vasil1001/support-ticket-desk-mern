import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getNotes).pending, (state) => {
            state.notes = null
        }
        .addCase(getNotes.fulfilled, (state, action) => {
            // NOTE: even if there are no notes for the ticket we get an empty
            // array, so we can use this to detect if we have notes or are fetching
            // notes. Payload will be an array of notes or an empty array, either
            // means we have finished fetching the notes.
            state.notes = action.payload
          })
    }
})

export default noteSlice.reducer