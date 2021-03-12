import React, { useReducer } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import PokemonContext from './contexts/PokemonContext';
import pokemonReducer from './reducers/pokemonReducer';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

const App = () => {
  const [state, dispatch] = useReducer(pokemonReducer, {})
  const context = { state, dispatch }

  return (
    <PokemonContext.Provider value={context}>
      <div>
        <Router>
          <Switch>
            <Route path="/pokemons/:pokemonName">
              <Pokemon />
            </Route>
            <Route path="/pokemons">
              <PokemonList />
            </Route>
            <Route path="/">
              <Redirect to="/pokemons" />
            </Route>
          </Switch>
        </Router>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
