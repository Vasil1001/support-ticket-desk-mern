import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"
// Get user from localstorage
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccessful: false,
  isLoading: false,
  message: "",
}

// * Register new user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
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

// * Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  console.log(user)
})

// * Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //   Action creator-resetting state to default gets called in useEffect in the Register.js
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ""
    },
  },
  // extraReducers with the createAsyncThunk allows us to add cases and chain on
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload // * this is coming from the try in register
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload // * this is coming from the trycatch error message from backend see return thunkAPI.rejectWithValue(message) in const register
        state.user = null
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload // * this is coming from the trycatch error message from backend see return thunkAPI.rejectWithValue(message) in const register
        state.user = null
      })
  },
})
export const { reset } = authSlice.actions
export default authSlice.reducer
