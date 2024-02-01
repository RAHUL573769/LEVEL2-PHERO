import { createSlice } from "@reduxjs/toolkit";
import { TAction, TInitialState } from "../../../Types/allTypes";

const initialState: TInitialState = {
  quiz: []
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    addQuiz: (state, action: TAction) => {
      // console.log(state);
      state.quiz.push(action.payload);
    }
  }
});
export const { addQuiz } = quizSlice.actions;
export default quizSlice.reducer;
