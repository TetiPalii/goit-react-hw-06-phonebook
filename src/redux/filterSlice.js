import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeFilter(state, action) {
      //   console.log(state, action);
      state.filter = action.payload;
      //   console.log(state.filter);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
