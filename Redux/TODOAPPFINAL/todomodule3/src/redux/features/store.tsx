import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../features/slice/todoSlice";
import { baseApi } from "./api/api";
export const store = configureStore({
  reducer: {
    todos: todoreducer,
    [baseApi.reducerPath]: baseApi.reducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
