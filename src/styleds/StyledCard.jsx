import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#28292a48')};  
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  text-align: center;
  padding: 8px;
  height: 150px;
  width: 150px;

  img { 
    height: 94px;
  }

  a{
    height: 100%;
    text-decoration: none;
    color: #28292A ;
  }
`;
