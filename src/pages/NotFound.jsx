import { StyledColumnContainer } from '../styleds/StyledColumnContainer';
import { StyledContainer } from '../styleds/StyledContainer';
import { StyledImg } from '../styleds/StyledImg';
import pageNotFound from '../images/page-not-found.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <StyledColumnContainer>
        <StyledContainer minHeight="89vh" color="white">
          <StyledImg alt="not found" src={ pageNotFound } height="75vh" />
        </StyledContainer>
      </StyledColumnContainer>
      <Footer />
    </>
  );
}
