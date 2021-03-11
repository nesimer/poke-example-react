const pokemonReducer = (state, action) => {
  const { type, data } = action
  switch (type) {
    case 'setSelected':
      return { ...state, selectedUrl: data.selected.url, selectedPokemon: { name: data.selected.name } }
    case 'setSelectedPokemonDetails':
      return { ...state, selectedPokemon: data.pokemon }
    default:
      return { ...state }
  }
}

export default pokemonReducer;
