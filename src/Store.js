import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { addVehicleEntry } from "./Features/AddVelEntrySlice";
import { addVehicleData } from "./Features/addDataSlice";

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  addVelEnt: addVehicleEntry,
  addVelData: addVehicleData,
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
