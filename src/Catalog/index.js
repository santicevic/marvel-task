import "./styles.css";
import CharacterList from "../components/CharacterList";
import React, { useState, useEffect } from "react";
import BookmarkedCharacters from "../components/BookmarkedCharacters";
import CharacterSearch from "../components/CharacterSearch";
import { fetchCharacters } from "../store/modules/characters/actions";
import { useDispatch } from "react-redux";

const Catalog = () => {
  const dispatch = useDispatch();
  const [nameSubstring, setNameSubstring] = useState("");

  useEffect(() => {
    nameSubstring && dispatch(fetchCharacters(nameSubstring));
  }, [dispatch, nameSubstring]);

  return (
    <div className="catalog-container">
      <CharacterSearch setNameSubstring={setNameSubstring} />
      {nameSubstring ? <CharacterList /> : <BookmarkedCharacters />}
    </div>
  );
};

export default Catalog;
