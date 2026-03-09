"use client";

import { createSlice } from "@reduxjs/toolkit";
interface UtilsState {
  mobileMenu: boolean;
}
const initialState: UtilsState = {
  mobileMenu: false,
};

const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      return { ...state, mobileMenu: !state.mobileMenu };
    },
  },
});

export const utilsReducer = utilsSlice.reducer;
export const { toggleMobileMenu } = utilsSlice.actions;
