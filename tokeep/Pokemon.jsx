import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Pokemon = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(pokemonUrl)
      setPokemon(data)
    }
    fetchData()
  }, [pokemonUrl])

  return pokemon ? (
    <div>
      <img src={pokemon.sprites.back_default} />
      <img src={pokemon.sprites.front_default} />
      <p><b>ID:</b> {pokemon.id}</p>
      <p><b>NAME:</b> {pokemon.name}</p>
    </div>
  ) : 'Loading...'
}

export default Pokemon
