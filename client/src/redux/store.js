import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSclice';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
})