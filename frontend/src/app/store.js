import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import formReducer from '../features/forms/formSlice'
import profileReducer from '../features/profile/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forms: formReducer,
    profile: profileReducer,
  },
})