import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/CounterSlice";
import { updateNameslice } from "./features/UpdateNameslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    changename: updateNameslice,
  },
});
