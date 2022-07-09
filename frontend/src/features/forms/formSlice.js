import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    forms: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = formSlice.actions;
export default formSlice.reducer;