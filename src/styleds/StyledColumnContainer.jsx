import styled from 'styled-components';

export const StyledColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '0')};
  height: ${(props) => (props.height ? props.height : '100%')};
  width: ${(props) => (props.width ? props.width : '')};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  span{
    font-size: 0.8em;
  }
`;
