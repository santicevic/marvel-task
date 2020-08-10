import { createStore, combineReducers } from 'redux';
import characterReducer from './modules/characters';

const rootReducer = combineReducers({
  characters: characterReducer
});

const store = createStore(
  rootReducer
);

export default store;
