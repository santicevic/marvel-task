import React, { useState, useEffect, Fragment } from 'react';
import Character from '../components/Character';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_CHARACTERS } from '../store/modules/characters/constants';

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
  <Fragment>
    <input
      value={nameSubstring}
      onChange={e => setNameSubstring(e.target.value)} />
    { characters.results && characters.results.map(character => (
        <Character key={character.id} character={ character } />
    ))}
  </Fragment>
  );
}
  
export default Catalog;
