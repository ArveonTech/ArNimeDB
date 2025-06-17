import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    tambahData: (state, action) => {
      state.push(action.payload);
    },
    hapusData: (state, action) => {
      return state.filter((data) => data.mal_id !== action.payload);
    },
  },
});

export const { tambahData } = dataSlice.actions;
export const { hapusData } = dataSlice.actions;
export default dataSlice.reducer;
