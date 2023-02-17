import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Pokedex from '../components/Pokedex';
import Search from '../components/Search';
import { StyledMain } from '../styleds/StyledMain';

export default function Home() {
  return (
    <>
      <Header />
      <StyledMain>
        <Navbar />
        <Search />
        <Pagination />
        <Pokedex />
        <Pagination />
      </StyledMain>
      <Footer />
    </>
  );
}
