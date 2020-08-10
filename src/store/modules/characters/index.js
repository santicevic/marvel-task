import { SET_CHARACTERS }  from './constants';

const reducer = (state = [], action) => {
    switch (action.type) {
      case SET_CHARACTERS:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default reducer;
