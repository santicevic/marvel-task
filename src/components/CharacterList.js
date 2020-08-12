import React, { Fragment } from "react";
import Character from "../components/Character";
import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";

const CharacterList = () => {
  const characters = useSelector(state => state.characters);
  const bookmarks = useSelector(state => state.bookmarks);

  if (characters.loading)
    return (
      <div className="catalog-loader-container">
        <div className="catalog-loader" />
      </div>
    );

  return (
    <Fragment>
      <div className="catalog-character-list">
        {characters.results &&
          characters.results.map(character => (
            <Character
              key={character.id}
              character={character}
              isBookmarked={bookmarks.some(
                bookmark => bookmark.id === character.id
              )}
            />
          ))}
      </div>
      <Pagination />
    </Fragment>
  );
};

export default CharacterList;
