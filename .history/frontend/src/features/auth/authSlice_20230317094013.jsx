import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "null",
  isError: false,
  isSuccessful: false,
  isLoading: false,
  message: "",
}

// Register new user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user)
  }
)

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user)
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //     .addCase(login.pending, (state) => {
    //         state.isLoading = true
    //     })
    //     .addCase(login.fulfilled, (state, action) => {
    //         state.isLoading = false
    //         state.isSuccessful = true
    //         state.user = action.payload
    //     })
    //     .addCase(login.rejected, (state, action) => {
    //         state.isLoading = false
    //         state.isError = true
    //         state.message = action.error.message
    //     })
  },
})

export default authSlice.reducer
