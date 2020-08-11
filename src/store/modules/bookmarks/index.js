import { BOOKMARK_CHARACTER, UNBOOKMARK_CHARACTER } from "./constants";

const bookmarks = localStorage.getItem("bookmarks");

const initialState = bookmarks ? JSON.parse(bookmarks) : [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKMARK_CHARACTER:
      localStorage.setItem("bookmarks", JSON.stringify([...state, payload]));
      return [...state, payload];
    case UNBOOKMARK_CHARACTER:
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(state.filter(item => item.id !== payload.id))
      );
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};

export default reducer;
