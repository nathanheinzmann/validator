import React from 'react';
import { ResponseText, Wrapper } from './styles';

type ResponseProps = {
  children?: string | JSX.Element;
}

const Response: React.FC<ResponseProps> = ({ children }) => {
  return(
    <Wrapper>
      <ResponseText>{children}</ResponseText>
    </Wrapper>
  );
}

export default Response;
