import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#EFEFED')};
  height: ${(props) => (props.height ? props.height : '40px')};
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: center;
  width: 90%;
`;
