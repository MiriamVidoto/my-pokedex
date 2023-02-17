import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: #28292A;
  display: flex;
  justify-content: center;
  height: 100%;

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #EFEFED;
    text-decoration: none;
    margin: 2px;
    padding: 8px;
    width: 20%;
  }

  a:hover{
    background-color: #383b3b;

  }
`;
