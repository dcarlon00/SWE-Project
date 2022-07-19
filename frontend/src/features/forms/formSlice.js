import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import formService from './formService'

const initialState = {
  forms: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new form
export const createForm = createAsyncThunk(
  'forms/create',
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await formService.createForm(formData, token)
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

// Get user forms
export const getForms = createAsyncThunk(
  'forms/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await formService.getForms(token)
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

// Delete user form
export const deleteForm = createAsyncThunk(
  'forms/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await formService.deleteForm(id, token)
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

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {     
    reset:(state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createForm.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createForm.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms.push(action.payload)
      })
      .addCase(createForm.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getForms.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getForms.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms = action.payload
      })
      .addCase(getForms.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteForm.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteForm.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.forms = state.forms.filter(
          (form) => form._id !== action.payload.id
        )
      })
      .addCase(deleteForm.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = formSlice.actions
export default formSlice.reducer