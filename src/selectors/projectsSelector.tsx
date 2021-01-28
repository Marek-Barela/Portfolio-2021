import { RootState } from "../reducers";

export const getProjects = (state: RootState) => {
  return state.projectsReducer;
};
