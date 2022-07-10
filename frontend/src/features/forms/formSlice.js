/* import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import formService from './formService'

const initialState = {
    forms: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Create new Form
export const createForm = createAsyncThunk('forms/create', async (formData, thunkAPI) => {
    try{
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
})

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createForm.pending, (state =>{
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
                state.message = (action.payload)
            })
            )
    }
})

export const {reset} = formSlice.actions;
export default formSlice.reducer; */