import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import validationSlice from "./validation-slice";
import propertydataSlice from "./propertydata-slice";
import searchSlice from "./search-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    validation: validationSlice.reducer,
    propertydata: propertydataSlice.reducer,
    search: searchSlice.reducer,
  },
});
export default store;
