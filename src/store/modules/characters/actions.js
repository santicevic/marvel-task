import { FETCH_CHARACTERS, FETCH_CHARACTERS_FULFILLED } from './constants';

export const fetchCharacters = nameSubstring => ({
  type: FETCH_CHARACTERS,
  payload: nameSubstring
});

export const fetchCharactersFulfilled = data => ({
  type: FETCH_CHARACTERS_FULFILLED,
  payload: data
});
