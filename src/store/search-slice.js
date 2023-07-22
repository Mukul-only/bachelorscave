import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: {},
    isTouched: false,
    validity: {},
    formValidity: false,
  },
  reducers: {
    setSearchData(state, action) {
      const item = action.payload;
      state.searchData[item.id] = item.value;
    },
    setValidity(state, action) {
      const item = action.payload;
      state.validity[item.id] = item.isValid;
      const val = Object.values(state.validity);
      let tempValid = true;
      val.forEach((i) => {
        tempValid = tempValid && i;
      });
      state.formValidity = tempValid;
    },
    setTouched(state) {
      state.isTouched = true;
    },
    reset(state) {
      state.searchData = {};
      state.validity = {};
      state.isTouched = false;
    },
  },
});
export const searchActions = searchSlice.actions;
export default searchSlice;
