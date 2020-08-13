import { ofType, combineEpics } from "redux-observable";
import { interval, from } from "rxjs";
import { debounce, map, switchMap } from "rxjs/operators";
import { FETCH_CHARACTERS } from "./modules/characters/constants";
import { fetchCharactersFulfilled } from "./modules/characters/actions";
import { getCharactersByName } from "../api";

const DEBOUNCE_INTERVAL = 300;

const fetchCharactersEpic = action$ =>
  action$.pipe(
    ofType(FETCH_CHARACTERS),
    debounce(() => interval(DEBOUNCE_INTERVAL)),
    switchMap(({ payload }) =>
      from(getCharactersByName(payload)).pipe(map(fetchCharactersFulfilled))
    )
  );

export default combineEpics(fetchCharactersEpic);
