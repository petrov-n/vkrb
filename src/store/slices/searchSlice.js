import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.data = action.payload;
    },
    resetSearch: (state) => {
      state.data = '';
    }
  },
})

export const { 
    setSearch,
    resetSearch
} = searchSlice.actions

export default searchSlice.reducer