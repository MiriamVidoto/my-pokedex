import styled from 'styled-components';

export const StyledTag = styled.div`
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '12px')};
  flex-direction: ${(props) => (props.column ? props.column : '')};
  background-color: ${(props) => (props.color ? props.color : 'white')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  margin: ${(props) => (props.margin ? props.margin : '2px')};
  height: ${(props) => (props.height ? props.height : '40px')};
  width: ${(props) => (props.width ? props.width : '280px')};
  display: flex;
  padding: 4px;
  box-shadow: 1px 1px 2px #00000041;
  font-size: 0.8em;
  color: #28292A;
  text-align: center;
  
  span{
    flex-basis: 50%;
  }

`;
