import { FETCH_CHARACTERS, FETCH_CHARACTERS_FULFILLED, SET_NAME_SUBSTRING } from "./constants";

export const fetchCharacters = params => ({
  type: FETCH_CHARACTERS,
  payload: params,
});

export const fetchCharactersFulfilled = data => ({
  type: FETCH_CHARACTERS_FULFILLED,
  payload: data,
});

export const setNameSubstring = nameSubstring => ({
  type: SET_NAME_SUBSTRING,
  payload: nameSubstring,
});
