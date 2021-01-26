import { SWITCH_LANGUAGE } from "./types";

export function switchLanguage(language: string) {
  return {
    type: SWITCH_LANGUAGE,
    payload: language,
  };
}
