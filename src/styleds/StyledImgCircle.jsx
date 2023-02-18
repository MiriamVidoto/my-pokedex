import styled from 'styled-components';

export const StyledImgCircle = styled.div`
  background-color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  width: 320px;

  img{
    height: 110%;
  }
`;
