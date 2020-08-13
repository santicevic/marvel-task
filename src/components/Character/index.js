import "./styles.css";
import React from "react";
import { useDispatch } from "react-redux";
import { bookmarkCharacter, unbookmarkCharacter } from "../../store/modules/bookmarks/actions";

const Character = ({ character, isBookmarked }) => {
  const dispatch = useDispatch();
  const toggleBookmark = () => {
    dispatch(
      isBookmarked ? unbookmarkCharacter(character) : bookmarkCharacter(character)
    );
  };

  return (
    <div className="catalog-character-list-item">
      <span
        className={
          isBookmarked ? "catalog-character-bookmark-active" : "catalog-character-bookmark"
        }
        onClick={toggleBookmark}
      >
        Bookmark
      </span>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`
        .replace("http", "https")}
        alt="character"
      />
      <h3>{character.name}</h3>
    </div>
  );
};

export default Character;
