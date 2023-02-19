import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  background-color: ${(props) => (props.color ? props.color : '#EFEFED')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '0')};
`;
