import { combineReducers } from "redux";
import languageReducer from "./LanguageReducer";
import projectsReducer from "./ProjectsReducer";

const reducerMap = {
  languageReducer,
  projectsReducer,
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState>(reducerMap);

export default rootReducer;
