import { createSlice } from "@reduxjs/toolkit";
const propertydataSlice = createSlice({
  name: "propertydata",
  initialState: {
    propertydata: {
      "Property details": {},
      "Locality details": {},
      "Rental details": {},
      Amenities: {},
      Gallery: {},
      Schedule: {},
    },
  },
  reducers: {
    setPropertyData(state, action) {
      const item = action.payload;
      state.propertydata[item.id][item.name] = item.value;
    },
  },
});

export const propertydataActions = propertydataSlice.actions;
export default propertydataSlice;
