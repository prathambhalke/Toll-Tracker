import { createSlice } from "@reduxjs/toolkit";

export const addVehicleEntry = createSlice({
  name: "addVelEnt",
  initialState: {
    selectToll: "",
    vehicleType: "",
    vehicleNumber: "",
    journeyType: "single",
  },
  reducers: {
    addSelectToll: (state, action) => {
      return { ...state, selectToll: action.payload };
    },
    addVehicleType: (state, action) => {
      return { ...state, vehicleType: action.payload };
    },
    addVehicleNum: (state, action) => {
      return { ...state, vehicleNumber: action.payload };
    },
    addJourneyType: (state, action) => {
      return {
        ...state,
        journeyType: action.payload,
      };
    },
  },
});

// Action creator
export const AddVehicleSliceActions = addVehicleEntry.actions;

// Reducer
export default addVehicleEntry.reducer;
