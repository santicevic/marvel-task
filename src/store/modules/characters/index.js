import { FETCH_CHARACTERS, FETCH_CHARACTERS_FULFILLED, SET_NAME_SUBSTRING } from "./constants";

const initialState = { loading: false, nameSubstring: "" };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS:
      return { ...state, loading: true };
    case FETCH_CHARACTERS_FULFILLED:
      return { ...state, ...payload.data.data, loading: false };
    case SET_NAME_SUBSTRING:
      return { ...state, nameSubstring: payload };
    default:
      return state;
  };
};

export default reducer;
