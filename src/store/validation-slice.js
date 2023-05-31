import { createSlice } from "@reduxjs/toolkit";

const validationSlice = createSlice({
  name: "listpropertyValidation",
  initialState: {
    current: 0,
    next: "/listproperty",
    prev: "/listproperty",
    isTouched: false,
    feildValidity: [],
    isSectionValid: {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    },
    isFormValid: false,
    isListpropertyValid: false,
  },
  reducers: {
    setIsTouched(state) {
      state.isTouched = true;
    },
    setFeildValidity(state, action) {
      const newItem = action.payload;
      const existingItem = state.feildValidity.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.feildValidity.push({
          ...newItem,
        });
      } else {
        existingItem.isValid = newItem.isValid;
      }
      let formValid = true;
      state.feildValidity.forEach((element) => {
        formValid = formValid && element.isValid;
      });
      state.isFormValid = formValid;
    },
    setCurrent(state, action) {
      state.current = action.payload;
    },
    setSectionValidity(state, action) {
      state.isSectionValid[action.payload] = true;
      let tempValid = true;

      Object.values(state.isSectionValid).forEach((element) => {
        tempValid = tempValid && element;
      });
      state.isListpropertyValid = tempValid;
    },
    setNext(state, action) {
      state.next = action.payload;
    },
    setPrev(state, action) {
      state.prev = action.payload;
    },
    removeFeildValidity(state, action) {
      state.feildValidity = state.feildValidity.filter(
        (item) => item.id !== action.payload
      );
    },
    reset(state) {
      state.isTouched = false;
      state.isFormValid = false;
      state.feildValidity = [];
    },
    finalReset(state) {
      state.current = 0;
      state.next = "/listproperty";
      state.prev = "/listproperty";
      state.isTouched = false;
      state.feildValidity = [];
      state.isSectionValid = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
      };
      state.isFormValid = false;
      state.isListpropertyValid = false;
    },
  },
});
export const validationActions = validationSlice.actions;
export default validationSlice;
