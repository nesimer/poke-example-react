import React, { useEffect, useState } from 'react';
import PokemonList from './PokemonList';
import Pokemon from './Pokemon';

const App = () => {
  const [selectedPokemon, setPokemon] = useState(undefined)

  useEffect(() => console.log(selectedPokemon), [selectedPokemon])

  return (
    <div>
      <PokemonList onSelectOne={(selected) => setPokemon(selected)} />
      {selectedPokemon ? <Pokemon pokemonUrl={selectedPokemon.url} /> : "No selected pokemon"}
    </div>
  );
};

export default App;
