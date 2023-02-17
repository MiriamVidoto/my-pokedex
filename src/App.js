import { Route, Routes } from 'react-router-dom';
import PokedexProvider from './context/PokedexProvider';
import About from './pages/About';
import FavoritePokemons from './pages/FavoritesPokemons';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PokemonDetails from './pages/PokemonDetails';

export default function App() {
  return (
    <PokedexProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/details/:name" element={ <PokemonDetails /> } />
        <Route path="/favorites" element={ <FavoritePokemons /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </PokedexProvider>
  );
}
