import React, { useState, useEffect, Fragment } from 'react';
import Character from '../components/Character';
import { connect } from 'react-redux';
// import { getCharactersByName } from './api/index';

const Catalog  =  ({ characters }) => {
  const [nameSubstring, setNameSubstring] = useState('');

  useEffect(() => { 
    console.log(characters)
    // nameSubstring && getCharactersByName(nameSubstring)
    //   .then(({ results }) => setCharacters(results))
  }, [characters, nameSubstring]);

  return (
  <Fragment>
    <input
      value={nameSubstring}
      onChange={e => setNameSubstring(e.target.value)} />
    { characters.map(character => (
        <Character character={ character } />
      ))
    }
  </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  }
};
  
export default connect(
  mapStateToProps,
  null
)(Catalog);
