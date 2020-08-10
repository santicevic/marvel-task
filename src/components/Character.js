import React from 'react';

const Character = ({ character }) => ( 
  <div key={ character.id }>
    <h3>{character.name}</h3>
    <h5>{character.description}</h5>
  </div>
)

export default Character;
