import React, { useEffect } from 'react'
import Axios from 'axios'
import { usePokemonContext } from '../contexts/PokemonContext'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const { pokemonName } = useParams()
  const { state, dispatch } = usePokemonContext()
  const { selectedPokemon } = state

  useEffect(() => {
    const fetchData = async () => {
      const { data: pokemon } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      dispatch({ type: 'setSelectedPokemonDetails', data: { pokemon } })
    }
    fetchData()
  }, [pokemonName, dispatch])

  return selectedPokemon?.id ? (
    <div>
      <img alt={`${selectedPokemon.name} back`} src={selectedPokemon.sprites.back_default} />
      <img alt={`${selectedPokemon.name} front`} src={selectedPokemon.sprites.front_default} />
      <p><b>ID:</b> {selectedPokemon.id}</p>
      <p><b>NAME:</b> {selectedPokemon.name}</p>
    </div>
  ) : "En cours de chargement..."
}

export default Pokemon
