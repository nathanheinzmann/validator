import { useContext, useState } from 'react';
import { Wrapper } from './styles';
import ValueInsertedContext from '../../contexts/ValueInserted'


const Input = () => {
  const [localValue, setLocalValue] = useState("");
  const { handleChangeValue } = useContext(ValueInsertedContext);

  const handleClick = () => {
    handleChangeValue(localValue)
  };

  return(
    <Wrapper>
      <label><strong>Nome</strong></label>
      <input
        onChange={({target})=> setLocalValue(target.value)} 
        value={localValue} type="text"
        placeholder="Nome da variável."/>
      <button onClick={handleClick}>Testar</button>
    </Wrapper>
  );
}

export default Input;
