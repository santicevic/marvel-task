import { ofType, combineEpics } from "redux-observable";
import { interval, from } from "rxjs";
import { debounce, map, switchMap } from "rxjs/operators";
import { FETCH_CHARACTERS } from "./modules/characters/constants";
import { fetchCharactersFulfilled } from "./modules/characters/actions";
import { getCharactersByName } from "../api";
import { BOOKMARK_CHARACTER, UNBOOKMARK_CHARACTER } from "./modules/bookmarks/constants";
import { setBookmarks } from "./modules/bookmarks/actions";

const DEBOUNCE_INTERVAL = 300;

const fetchCharactersEpic = action$ =>
  action$.pipe(
    ofType(FETCH_CHARACTERS),
    debounce(() => interval(DEBOUNCE_INTERVAL)),
    switchMap(({ payload }) =>
      from(getCharactersByName(payload)).pipe(map(fetchCharactersFulfilled))
    )
  );

const bookmarkCharacterEpic = (action$, state$) =>
  action$.pipe(
    ofType(BOOKMARK_CHARACTER),
    map(({ payload }) => {
      const bookmarks = [...state$.value.bookmarks, payload];
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      return setBookmarks(bookmarks);
    })
  );

const unbookmarkCharacterEpic = (action$, state$) =>
  action$.pipe(
    ofType(UNBOOKMARK_CHARACTER),
    map(({ payload }) => {
      const bookmarks = state$.value.bookmarks.filter(
        (item) => item.id !== payload.id
      );
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      return setBookmarks(bookmarks);
    })
  );

export default combineEpics(
  fetchCharactersEpic,
  bookmarkCharacterEpic,
  unbookmarkCharacterEpic
);
