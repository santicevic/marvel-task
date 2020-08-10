import './App.css';
import dotenv from 'dotenv';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getCharactersByName } from './api/index';

dotenv.config();

function App({ characters }) {
  const [nameSubstring, setNameSubstring] = useState('');

  useEffect(() => { 
    console.log(characters)
    // nameSubstring && getCharactersByName(nameSubstring)
    //   .then(({ results }) => setCharacters(results))
  }, [characters, nameSubstring]);

  return (
    <div className="App">
      <input
        value={nameSubstring}
        onChange={e => setNameSubstring(e.target.value)} />
      { characters.map(character => (
        <div key={ character.id }>
          <h3>{character.name}</h3>
          <h5>{character.description}</h5>
        </div>
      )) }
    </div>
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
)(App);
