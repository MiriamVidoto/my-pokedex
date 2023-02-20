import styled from 'styled-components';

export const StyledTitle = styled.h1`
  padding-top: 8px;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  text-align: center;
  color: #28292A;
  width: ${(props) => (props.width ? props.width : '100%')};
  font-size: 1.8rem;
`;
