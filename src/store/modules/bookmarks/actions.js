import {
  BOOKMARK_CHARACTER,
  UNBOOKMARK_CHARACTER,
  SET_BOOKMARKS
} from "./constants";

export const bookmarkCharacter = character => ({
  type: BOOKMARK_CHARACTER,
  payload: character
});

export const unbookmarkCharacter = character => ({
  type: UNBOOKMARK_CHARACTER,
  payload: character
});

export const setBookmarks = bookmarks => ({
  type: SET_BOOKMARKS,
  payload: bookmarks
});
