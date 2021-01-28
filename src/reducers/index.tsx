import { combineReducers } from "redux";
import languageReducer from "./LanguageReducer";

const reducerMap = {
  languageReducer,
};

export type RootState = {
  [K in keyof typeof reducerMap]: ReturnType<typeof reducerMap[K]>;
};
export const rootReducer = combineReducers<RootState>(reducerMap);

export default rootReducer;
