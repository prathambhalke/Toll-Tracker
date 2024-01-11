import { configureStore, combineReducers } from "@reduxjs/toolkit";
import addVehicleEntry from "./Features/AddVelEntrySlice";

// Combine reducers if you have multiple slices
const rootReducer = combineReducers({
  addVelEnt: addVehicleEntry,
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
