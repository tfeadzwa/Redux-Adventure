import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "joe foo" },
  { id: "1", name: "bar foot" },
  { id: "2", name: "bob lash" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;