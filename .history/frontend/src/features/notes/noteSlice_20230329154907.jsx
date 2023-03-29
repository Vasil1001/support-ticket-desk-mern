import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  notes: null,
}

export const noteSlice = createSlice({
  name: "note",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getNotes.pending, (state) => {
      state.notes = null // in order to show spinner its pe
    })
  },
})
createSlice
createAsyncThunk
noteService

export default noteSlice.reducer
