import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#28292A')};
  box-shadow: 1px 1px 2px #00000041;
  color: #EFEFED;
  border-radius: 4px;
  border: none;
  height: 28px;
  margin: 4px;
  padding: 4px;
  width: 150px;
`;
