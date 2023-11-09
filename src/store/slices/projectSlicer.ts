import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IProject } from "../../types/project";

const initialState: IProject[] = [
  {
    id: 0,
    title: "your task list",
  },
];

const ProjectSlices = createSlice({
  name: "Project",
  initialState: initialState,
  reducers: {
    projectAdded: (state, action) => {
      state.push({ ...action.payload });
    },
    projectDelite: (state, action) => {
      const projectIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state.slice(projectIndex, 1);
    },
  },
});

export const ProjectSelector = {
  getProject: (state: RootState) => state.Project,
};

export const { projectAdded, projectDelite } = ProjectSlices.actions;

export default ProjectSlices;
