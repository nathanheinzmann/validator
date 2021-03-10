import React, { useState } from 'react';
import { Wrapper } from './styles';


const Input = () => {

  const [varName, setVarName] = useState("exemplo");

  const handleClick = () => {  }

  return(
    <Wrapper>
      <label><strong>Nome</strong></label>
      <input
        onChange={({target})=> setVarName(target.value)} 
        value={varName} type="text"
        placeholder="Nome da variável."/>
      <button onClick={handleClick}>Testar</button>
    </Wrapper>
  );
}

export default Input;