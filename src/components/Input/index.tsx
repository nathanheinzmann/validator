import { useContext } from 'react';
import { Wrapper } from './styles';
import ValueInsertedContext from '../../contexts/ValueInserted'


const Input = () => {
  const { handleChangeValue, value } = useContext(ValueInsertedContext);

  return(
    <Wrapper>
      <input
        onChange={({target})=> handleChangeValue(target.value)} 
        value={value} type="text"
        placeholder="Nome da variável."/>
    </Wrapper>
  );
}

export default Input;
