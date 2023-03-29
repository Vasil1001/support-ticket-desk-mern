import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import noteService from "./noteService"

const initialState = {
  notes: null,
}

// * Get selected ticket notes
export const getNotes = createAsyncThunk(
  "notes/getAll",
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.getNotes(ticketId, token)
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

// * Create a new note for selected ticket
export const getNotes = createAsyncThunk(
  "notes/getAll",
  async (ticketId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await noteService.getNotes(ticketId, token)
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

export const noteSlice = createSlice({
  name: "note",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNotes.pending, (state) => {
        state.notes = null // in order to show spinner its pending while fetching
      })
      .addCase(getNotes.fulfilled, (state, action) => {
        state.notes = action.payload
      })
    //   .addCase(createNote.fulfilled, (state, action) => {
    //     state.notes.push(action.payload)
    //   })
  },
})

export default noteSlice.reducer
