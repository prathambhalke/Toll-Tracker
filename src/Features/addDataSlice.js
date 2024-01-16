import { createSlice } from "@reduxjs/toolkit";

export const addVehicleData = createSlice({
  name: "addVelData",
  initialState: [],
  reducers: {
    addToll: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creator
export const VehicleDataSliceActions = addVehicleData.actions;

// Reducer
export default addVehicleData.reducer;
