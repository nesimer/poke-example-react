import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './PokemonList.css'
import { usePokemonContext } from '../contexts/PokemonContext';
import { Link } from 'react-router-dom'

const PokemonItem = ({ pkmn }) => {
  const { state, dispatch } = usePokemonContext()

  const selectedName = state?.selectedPokemon?.name
  const handleClick = () => {
    dispatch({ type: 'setSelected', data: { selected: pkmn } })
  }

  return <li className={pkmn.name === selectedName ? 'selected' : ''} onClick={handleClick}>
    <Link to={`/pokemons/${pkmn.name}`}>{pkmn.name}</Link>
  </li >
}

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
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

  return (
    <div>
      <h1>Pokemons list</h1>
      <ul className="pkmnList">
        {isLoading && "... Loading ..."}
        {!isLoading && pokemons.map(pkmn => (
          <PokemonItem key={pkmn.name} pkmn={pkmn} />
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
