import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#28292A')};
  box-shadow: ${(props) => (props.shadow ? props.shadow : '1px 1px 2px #00000041')};
  color: #EFEFED;
  border-radius: 4px;
  border: none;
  height: ${(props) => (props.height ? props.height : '28px')};
  margin: 4px;
  padding: 4px;
  width: ${(props) => (props.width ? props.width : '150px')};

  &:hover {
    background-color: ${(props) => (props.hover ? props.hover : '#28292ae8;')};
    color: ${(props) => (props.color ? props.color : '#dcdcdbfe')};
    cursor: pointer;
  }

`;
