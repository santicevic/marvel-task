import React from "react";
import Character from "../components/Character";
import { useSelector } from "react-redux";

const CharacterList = () => {
  const characters = useSelector(state => state.characters);
  const bookmarks = useSelector(state => state.bookmarks);

  return (
      <div className="catalog-character-list">
        {characters.results &&
          characters.results.map(character => (
            <Character
              key={character.id}
              character={character}
              isBookmarked={bookmarks.some(
                (bookmark) => bookmark.id === character.id
              )}
            />
          ))}
      </div>
  );
};

export default CharacterList;
