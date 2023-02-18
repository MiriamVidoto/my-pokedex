import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : '#EFEFED')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '0')};
`;
