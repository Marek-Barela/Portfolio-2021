import { SWITCH_LANGUAGE } from "../actions/types";

const defaultLanguage = "EN";

interface Action {
  type: string;
  payload: string;
}

const languageReducer = (state = defaultLanguage, action: Action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default languageReducer;
