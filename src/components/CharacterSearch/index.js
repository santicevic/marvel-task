import "./styles.css";
import React from "react";
import { useSelector ,useDispatch } from "react-redux";
import { setNameSubstring } from "../../store/modules/characters/actions";

const CharacterSearch = () => {
  const dispatch = useDispatch();
  const nameSubstring = useSelector(state => state.characters.nameSubstring);
  return (
    <input
      value={nameSubstring}
      onChange={e => dispatch(setNameSubstring(e.target.value))}
      placeholder="Search marvel characters"
      className="catalog-search-bar"
    />
  );
};

export default CharacterSearch;
