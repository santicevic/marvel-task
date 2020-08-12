import "./styles.css";
import React from "react";

const CharacterSearch = ({ nameSubstring, setNameSubstring }) => {
  return (
    <input
      value={nameSubstring}
      onChange={(e) => setNameSubstring(e.target.value)}
      placeholder="Search marvel characters"
      className="catalog-search-bar"
    />
  );
};

export default CharacterSearch;
