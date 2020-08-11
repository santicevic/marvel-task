import { applyMiddleware, createStore, combineReducers } from 'redux';
import characterReducer from './modules/characters';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';

const rootReducer = combineReducers({
  characters: characterReducer
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
