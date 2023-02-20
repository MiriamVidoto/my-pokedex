import styled from 'styled-components';

export const StyledImg = styled.img`
  height: ${(props) => (props.height ? props.height : '100%')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
`;
