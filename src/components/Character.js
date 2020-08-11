import React from 'react';

const Character = ({ character }) => {
  const toggleBookmark = () => {
    console.log('toggle' + character.name)
  };

  return (   
    <div className="catalog-character-list-item">
      <span
        className="catalog-character-bookmark"
        onClick={ toggleBookmark }>
          Bookmark
      </span>
      <img 
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="character"/>
      <h3>{ character.name }</h3>
    </div>
  );
};

export default Character;
