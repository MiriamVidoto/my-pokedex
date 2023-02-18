import styled from 'styled-components';

export const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '0')};
  width: ${(props) => (props.width ? props.width : '')};
`;
