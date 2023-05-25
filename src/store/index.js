import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import validationSlice from "./validation-slice";
import propertydataSlice from "./propertydata-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    validation: validationSlice.reducer,
    propertydata: propertydataSlice.reducer,
  },
});
export default store;
