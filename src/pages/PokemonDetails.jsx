import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PokemonDetailsCard from '../components/PokemonDetailsCard';

export default function PokemonDetails() {
  return (
    <div>
      <Header />
      <Navbar />
      <PokemonDetailsCard />
      <h1>PokemonDetails</h1>
      <Footer />
    </div>
  );
}
