import { Route, Switch } from 'react-router-dom';
import PokedexProvider from './context/PokedexProvider';
import About from './pages/About';
import FavoritePokemons from './pages/FavoritesPokemons';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import { StyledGlobal } from './styleds/StyledGlobal';

export default function App() {
  return (

    <PokedexProvider>
      <StyledGlobal />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/my-pokedex" component={ Home } />
        <Route exact path="/details/:name" component={ PokemonDetails } />
        <Route exact path="/favorites" component={ FavoritePokemons } />
        <Route exact path="/about" component={ About } />
      </Switch>
    </PokedexProvider>

  );
}
