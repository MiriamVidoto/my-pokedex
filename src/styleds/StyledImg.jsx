import styled from 'styled-components';

export const StyledImg = styled.img`
  height: ${(props) => (props.height ? props.height : '100px')};
`;
