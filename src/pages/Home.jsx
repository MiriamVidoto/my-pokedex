import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Search />
      <Pagination />
      <Pokedex />
      <Pagination />
      <Footer />
    </div>
  );
}
