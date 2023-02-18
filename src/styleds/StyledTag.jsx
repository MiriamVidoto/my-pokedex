import styled from 'styled-components';

export const StyledTag = styled.div`
  display: flex;
  box-shadow: 1px 1px 2px #00000041;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
  flex-direction: ${(props) => (props.column ? props.column : '')};
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : '')};

  p{
    text-align: center;
    color: #28292A;
  }
`;
