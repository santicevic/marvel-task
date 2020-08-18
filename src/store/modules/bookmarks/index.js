import { SET_BOOKMARKS } from "./constants";

const bookmarks = localStorage.getItem("bookmarks");

const initialState = bookmarks ? JSON.parse(bookmarks) : [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKMARKS:
      return payload;
    default:
      return state;
  };
};

export default reducer;
