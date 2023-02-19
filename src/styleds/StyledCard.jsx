import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#28292a48')};  
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-align: center;
  padding: 8px;
  height: ${(props) => (props.height ? props.height : '150px')};
  width: ${(props) => (props.width ? props.width : '150px')};

  img { 
    height: ${(props) => (props.heightImg ? props.heightImg : '80%')};
  }

  a{
    height: 100%;
    text-decoration: none;
    color: #28292A ;
  }

  h4{
    margin: 0;
    font-size: 0.8em;
  }
`;
