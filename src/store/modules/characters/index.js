import { FETCH_CHARACTERS ,FETCH_CHARACTERS_FULFILLED } from "./constants";

const reducer = (state = { loading: false }, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS:
      return { loading: true }
    case FETCH_CHARACTERS_FULFILLED:
      return { ...payload.data.data, loading: false };
    default:
      return state;
  }
};

export default reducer;
