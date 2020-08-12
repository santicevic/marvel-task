import "./styles.css";
import CharacterList from "../components/CharacterList";
import React, { useEffect } from "react";
import BookmarkedCharacters from "../components/BookmarkedCharacters";
import CharacterSearch from "../components/CharacterSearch";
import { fetchCharacters } from "../store/modules/characters/actions";
import { useSelector, useDispatch } from "react-redux";

const Catalog = () => {
  const dispatch = useDispatch();
  const nameSubstring = useSelector(state => state.characters.nameSubstring);

  useEffect(() => {
    nameSubstring && dispatch(fetchCharacters(nameSubstring));
  }, [dispatch, nameSubstring]);

  return (
    <div className="catalog-container">
      <CharacterSearch />
      {nameSubstring ? <CharacterList /> : <BookmarkedCharacters />}
    </div>
  );
};

export default Catalog;
