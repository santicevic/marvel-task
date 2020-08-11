import { FETCH_CHARACTERS_FULFILLED }  from './constants';

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_FULFILLED:
      return payload.data.data;
    default:
      return state;
  }
};
  
export default reducer;
