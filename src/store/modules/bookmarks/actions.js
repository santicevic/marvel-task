import { BOOKMARK_CHARACTER, UNBOOKMARK_CHARACTER } from './constants';

export const bookmarkCharacter = character => ({
  type: BOOKMARK_CHARACTER,
  payload: character
});

export const unbookmarkCharacter = character => ({
  type: UNBOOKMARK_CHARACTER,
  payload: character
});
