import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ITask } from "../../types/task";

const initialState: ITask[] = [
  {
    id: 0,
    project_id: 0,
    title: "test",
    discription: "discription test",
  },
];

const TaskSlices = createSlice({
  name: "Task",
  initialState: initialState,
  reducers: {
    taskAdded: (state, action) => {
      state.push({ ...action.payload });
    },
    taskDelite: (state, action) => {
      const projectIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state.slice(projectIndex, 1);
    },
  },
});

export const AuthSelector = {
  getTask: (state: RootState, action: { payload: number }) => {
    return state.Task.find((item) => item.project_id === action.payload);
  },
};

export const { taskAdded, taskDelite } = TaskSlices.actions;

export default TaskSlices;
