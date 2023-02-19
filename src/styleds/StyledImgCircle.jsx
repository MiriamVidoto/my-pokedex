import styled from 'styled-components';

export const StyledImgCircle = styled.div`
  background-color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  height: ${(props) => (props.size ? props.size : '320px')};
  width: ${(props) => (props.size ? props.size : '320px')};

  img{
    height: 105%;
  }
`;
