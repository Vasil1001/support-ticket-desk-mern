import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
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
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

// * Logout user
// Logout user
// NOTE: here we don't need a thunk as we are not doing anything async so we can
// use a createAction instead
export const logout = createAction('auth/logout', () => {
  authService.logout()
  // return an empty object as our payload as we don't need a payload but the
  // prepare function requires a payload return
  return {}
})

// NOTE: in cases of login or register pending or rejected then user will
// already be null so no need to set to null in these cases

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
        state.user = action.payload // * this is coming from the try in register
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(login.pending, (state) => {
        state.isLoading = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload // * this is coming from the try in login
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
      })
      .addCase(logout.fulfilled, (state) => {
       state.user = null
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
