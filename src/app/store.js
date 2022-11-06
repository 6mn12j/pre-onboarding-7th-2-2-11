import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adverTisementsReducer from "../features/advertisements/advertisementsSlice";
import filterStateReducer from "../features/advertisements/filterStateSlice";

const RootReducer = combineReducers({ adverTisementsReducer, filterStateReducer });
export const store = configureStore({
  reducer: RootReducer,
});
