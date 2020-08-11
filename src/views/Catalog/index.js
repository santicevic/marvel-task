import './styles.css';
import React, { useState, useEffect } from 'react';
import Character from '../../components/Character';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CHARACTERS } from '../../store/modules/characters/constants';

const Catalog  =  () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);
  const [nameSubstring, setNameSubstring] = useState('');

  useEffect(() => {
    nameSubstring && dispatch({ 
      type: FETCH_CHARACTERS,
      payload: nameSubstring
    })
  }, [ dispatch, nameSubstring]);

  return (
    <div className="catalog-container">
      <input
        value={nameSubstring}
        onChange={e => setNameSubstring(e.target.value)}
        placeholder="Search marvel characters"
        className="catalog-search-bar"/>
      <div className="catalog-character-list">
        { characters.results && characters.results.map(character => (
            <Character key={character.id} character={ character } />
        ))}
      </div>
    </div>
  );
};
  
export default Catalog;
