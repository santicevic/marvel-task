import charactersReducer from "./modules/characters";
import bookmarksReducer from "./modules/bookmarks";
import rootEpic from "./epics";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

const rootReducer = combineReducers({
  characters: charactersReducer,
  bookmarks: bookmarksReducer
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
