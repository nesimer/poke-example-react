const pokemonReducer = (state, action) => {
  const { type, data } = action
  switch (type) {
    case 'setSelected':
      return { ...state, selectedPokemon: { name: data.selected.name } }
    case 'setSelectedPokemonDetails':
      return { ...state, selectedPokemon: data.pokemon }
    default:
      return { ...state }
  }
}

export default pokemonReducer;
