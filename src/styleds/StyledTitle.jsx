import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin: 0px;
  padding-top: 8px;
  background-color: ${(props) => (props.color ? props.color : '#28292A')};
  width:90%;
  text-align: center;
  color: #28292A;
`;
