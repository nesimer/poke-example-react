import React, { useState } from 'react';
import './PokemonList.css'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <ul className="pkmnList">
      {pokemons.map(pkmn => (
        <li key={pkmn.id}>{pkmn.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
