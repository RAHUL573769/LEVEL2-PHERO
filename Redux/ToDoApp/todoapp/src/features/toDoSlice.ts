import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {}
});

export default toDoSlice.reducer;
