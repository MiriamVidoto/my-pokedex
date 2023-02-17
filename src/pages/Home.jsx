import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
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
