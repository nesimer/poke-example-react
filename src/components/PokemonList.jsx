import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './PokemonList.css'

const PokemonItem = ({ pkmn, onClickHandler, isSelected }) => {
  return <li className={isSelected ? 'selected' : ''} onClick={onClickHandler}>
    {pkmn.name}
  </li>
}

const PokemonList = ({ onSelectOne }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState('')
  const [next, setNext] = useState(undefined);
  const [previous, setPrevious] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    const fetchData = async () => {
      const { data: { results, next, previous } } = await axios.get(url)
      setPokemons(results)
      setNext(next)
      setPrevious(previous)
      setIsLoading(false)
    }
    setIsLoading(true)
    fetchData()
  }, [url])

  useEffect(() => {
    onSelectOne(selected)
  }, [selected])

  return (
    <div>
      <h1>Pokemons list</h1>
      <ul className="pkmnList">
        {isLoading && "... Loading ..."}
        {!isLoading && pokemons.map(pkmn => (
          <PokemonItem key={pkmn.name} pkmn={pkmn} isSelected={selected.name === pkmn.name} onClickHandler={() => { setSelected(pkmn) }} />
        ))}
      </ul>
      <div style={{ display: 'inline' }}>
        <button disabled={!previous} onClick={() => setUrl(previous)}>⬅️ Previous</button>
        <button disabled={!next} onClick={() => setUrl(next)}>Next ➡️</button>
      </div>
    </div>

  );
};

export default PokemonList;
