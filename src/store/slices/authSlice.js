import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        state.data = action.payload;
    }
  },
})

export const { 
    setAuth
} = authSlice.actions

export default authSlice.reducer