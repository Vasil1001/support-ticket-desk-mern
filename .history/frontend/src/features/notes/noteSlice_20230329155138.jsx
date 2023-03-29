import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  notes: null,
}

// * Get single user ticket
export const getTicket = createAsyncThunk(
    "tickets/get",
    async (ticketId, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await ticketService.getTicket(ticketId, token)
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
      .addCase(createNote.fulfilled, (state, action) => {
        state.notes.push(action.payload)
      })
  },
})
createSlice
createAsyncThunk
noteService

export default noteSlice.reducer
