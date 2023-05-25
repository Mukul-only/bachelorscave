import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { mobileNavVisible: false },
  reducers: {
    toogle(state, action) {
      if (action.payload === 0) {
        state.mobileNavVisible = false;
      } else {
        state.mobileNavVisible = !state.mobileNavVisible;
      }
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
