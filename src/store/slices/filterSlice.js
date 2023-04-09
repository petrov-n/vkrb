import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.data = action.payload;
    },
    resetFilters: (state) => {
      state.data = null;
    }
  },
})

export const { 
  setFilters,
  resetFilters
} = filterSlice.actions

export default filterSlice.reducer