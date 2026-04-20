import { createSlice } from "@reduxjs/toolkit";

export const updateNameslice = createSlice({
  name: "updatename",
  initialState: {
    name: "Awais khan",
  },
  reducers: {
    changeName: (state) => {
      state.name = "waqas khan";
    },
  },
});

export const { name, changeName } = updateNameslice.actions;
export default updateNameslice.reducer;
