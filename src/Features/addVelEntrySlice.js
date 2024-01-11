import { createSlice } from "@reduxjs/toolkit";

export const addVehicleEntry = createSlice({
  name: "addVelEnt",
  initialState: {
    count: 0,
    selectToll: "",
    vehicleType: "",
    vehicleNumber: "",
    journeyType: {
      singleJourney: "",
      returnJourney: "",
    },
  },
  reducers: {
    addSelectToll: (state, action) => {
      return { ...state, selectToll: action.payload };
    },
    addVehicleNum: (state, action) => {
      return { ...state, vehicleNumber: action.payload };
    },
    addtoll: (state, action) => {
      return state.count + 1;
    },
  },
});

// Action creator
export const sliceActions = addVehicleEntry.actions;

// Reducer
export default addVehicleEntry.reducer;
