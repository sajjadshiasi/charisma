import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};
export const userSystem = createSlice({
  name: "addTo",
  initialState,
  reducers: {
    AddUser: (state, action) => {
      //@ts-ignore
      state.user.push(action.payload);
    },
    RemoveItem: (state, action) => {
      const itemId = action.payload;
      state.user = state.user.filter((item: any) => item.id !== itemId);
    },
    ClearList: (state) => {
      state.user = [];
    },
  },
});

export const { AddUser, RemoveItem, ClearList } = userSystem.actions;
export default userSystem.reducer;
