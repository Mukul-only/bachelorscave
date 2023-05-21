import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { mobileNavVisible: false },
  reducers: {
    toogle(state) {
      state.mobileNavVisible = !state.mobileNavVisible;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
