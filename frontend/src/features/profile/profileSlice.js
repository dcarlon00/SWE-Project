import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new profile
export const createProfile = createAsyncThunk(
  'profile/create',
  async (profileData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await profileService.createProfile(profileData, token)
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

export const updateProfile = createAsyncThunk(
  'profile/update',
  async (arg, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await profileService.updateProfile(arg.id, arg.profileData, token)
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

// Get user profile
export const getProfile = createAsyncThunk(
  'profile/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await profileService.getProfile(token)
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

// Delete users profile
export const deleteProfile = createAsyncThunk(
  'profile/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await profileService.deleteProfile(id, token)
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

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile.push(action.payload)
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile[0] = action.payload
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = state.profile.filter(
          (profiles) => profiles._id !== action.payload.id
        )
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer
