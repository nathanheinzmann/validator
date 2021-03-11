import React, { useContext } from 'react';
import { InsertedText, ResponseText, Wrapper } from './styles';
import ValueInsertedContext from '../../contexts/ValueInserted';
import { validator } from '../../utils'

const Response: React.FC = () => {
  const { value } = useContext(ValueInsertedContext);

  const handleValidate = () => validator(value) ? "Perfeito! ✅" : "Algo de errado não está certo... 🤔";

  return(
    <Wrapper>
      <InsertedText>
        {value || "Insira algum texto"}
      </InsertedText>
      <ResponseText>
        {handleValidate()}
      </ResponseText>
    </Wrapper>
  );
}

export default Response;
