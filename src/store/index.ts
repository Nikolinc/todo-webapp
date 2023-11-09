import { configureStore } from "@reduxjs/toolkit";
import ProjectSlices from "./slices/projectSlicer";
import TaskSlices from "./slices/taskSlicer";

const store = configureStore({
  reducer: {
    Task: TaskSlices.reducer,
    Project: ProjectSlices.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
