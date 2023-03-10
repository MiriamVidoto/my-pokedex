import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { StyledTitle } from '../styleds/StyledTitle';
import { StyledSidebar } from '../styleds/StyledSidebar';
import { StyledButton } from '../styleds/StyledButton';
import heartBlack from '../images/blackHeartIcon.svg';
import heartWhite from '../images/whiteHeartIcon.svg';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../utils/localStorage';

export default function MainDetails({ id, name, color, image }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const pokemon = { name, color, image };
  const indexNotFound = -1;

  const localStorageData = getDataFromLocalStorage('favorites')
    ? getDataFromLocalStorage('favorites')
    : [];

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    const index = localStorageData.findIndex((ele) => ele.name === name);
    if (index !== indexNotFound) {
      localStorageData.splice(index, 1);
    } else {
      localStorageData.push(pokemon);
    }
    setDataToLocalStorage('favorites', localStorageData);
  };

  const verifyLocalStorage = () => {
    if (localStorageData === undefined) setIsFavorite(false);
    else setIsFavorite(localStorageData.some((ele) => ele.name === name));
  };

  useEffect(() => {
    verifyLocalStorage();
  }, [name]);

  return (
    <StyledSidebar
      height="100px"
      color={ color }
      justifyContent="space-around"
    >
      <StyledTitle width="400px">
        {`#${id} ${(name).toUpperCase()}`}
      </StyledTitle>
      <StyledButton
        color={ color }
        shadow=" "
        width="20%"
        height="50%"
        hover=" "
        onClick={ handleClick }
      >
        {
          isFavorite
            ? <img alt="favoriteIcon" src={ heartBlack } />
            : <img alt="favoriteIcon" src={ heartWhite } />
        }
      </StyledButton>
    </StyledSidebar>
  );
}

MainDetails.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
