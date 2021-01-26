import { RootState } from "../reducers";

export const getActualLanguage = (state: RootState) => {
  return state.languageReducer;
};
