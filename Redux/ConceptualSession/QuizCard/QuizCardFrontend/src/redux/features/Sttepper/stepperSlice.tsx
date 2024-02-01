import { createSlice } from "@reduxjs/toolkit";

type TInitialStepState = {
  activeStep: number;
};
const initialState: TInitialStepState = {
  activeStep: 0
};
const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    setActiveState: (state, action) => {}
  }
});
