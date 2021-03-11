import React, { useContext } from 'react'

const PokemonContext = React.createContext({})

const usePokemonContext = () => useContext(PokemonContext)

export default PokemonContext

export { usePokemonContext }
