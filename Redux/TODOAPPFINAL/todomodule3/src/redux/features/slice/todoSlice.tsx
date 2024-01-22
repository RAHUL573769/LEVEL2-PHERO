import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      console.log("State From addTodoReducer", state);
      console.log("Payload From addTodoReducer", action);
      state.todos.push({ ...action.payload, isCompleted: false });
    }
  }
});
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
