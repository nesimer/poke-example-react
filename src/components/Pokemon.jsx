import React, { useEffect } from 'react'
import Axios from 'axios'
import { usePokemonContext } from '../contexts/PokemonContext'

const Pokemon = () => {
  const { state, dispatch } = usePokemonContext()
  const { selectedUrl, selectedPokemon } = state

  useEffect(() => {
    const fetchData = async () => {
      const { data: pokemon } = await Axios.get(selectedUrl)
      dispatch({ type: 'setSelectedPokemonDetails', data: { pokemon } })
    }
    fetchData()
  }, [selectedUrl, dispatch])

  return selectedPokemon.id ? (
    <div>
      <img alt={`${selectedPokemon.name} back`} src={selectedPokemon.sprites.back_default} />
      <img alt={`${selectedPokemon.name} front`} src={selectedPokemon.sprites.front_default} />
      <p><b>ID:</b> {selectedPokemon.id}</p>
      <p><b>NAME:</b> {selectedPokemon.name}</p>
    </div>
  ) : "En cours de chargement..."
}

export default Pokemon
