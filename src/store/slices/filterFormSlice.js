import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: '',
  cat: '',
  rate: '',
  date: Date.now(),
};

export const filterFormSlice = createSlice({
  name: 'filterForm',
  initialState,
  reducers: {
    setFilterType: (state, action) => {
      state.type = action.payload;
    },
    setFilterCat: (state, action) => {
      state.cat = action.payload;
    },
    setFilterRate: (state, action) => {
      state.rate = action.payload;
    },
    setFilterDate: (state, action) => {
      state.date = action.payload;
    },
    resetFormFilters: (state) => {
      state.type = '';
      state.cat = '';
      state.rate = '';
      state.date = Date.now();
    },
  },
})

export const { 
  setFilterType, 
  setFilterCat, 
  setFilterRate, 
  setFilterDate, 
  resetFormFilters, 
} = filterFormSlice.actions

export default filterFormSlice.reducer