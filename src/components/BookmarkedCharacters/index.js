import "./styles.css";
import React from "react";
import Character from "../../components/Character";
import { useSelector } from "react-redux";

const CharacterList = () => {
  const bookmarks = useSelector(state => state.bookmarks);
  return !bookmarks.length ? (
    <div className="catalog-no-bookmarks-container">
      <h3 className="catalog-no-bookmarks">No bookmarks yet</h3>
    </div>
  ) : (
    <div className="catalog-character-list">
      {bookmarks.map(character => (
        <Character key={character.id} character={character} isBookmarked />
      ))}
    </div>
  );
};

export default CharacterList;
