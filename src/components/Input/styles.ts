import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 25% 0 25%;
  
  > label{
    margin: 10px 0;
    color: #3a3a3a;
    text-align: justify;
    font-size: 1.8rem;
    
  }

  > input{
    border-radius: 5px;
    background-color: #f1fff4;
    outline: 0;
    max-width: 500px;
    margin: 10px 0;
    height: 1.8rem;

  }

  > button{
    border-radius: 10px;
    background-color: #f1fff4;
  }
`;