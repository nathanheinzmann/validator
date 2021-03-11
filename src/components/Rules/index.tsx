import React from 'react';
import { RulesText, Title, Wrapper } from './styles';

const Rules = () => (
  <Wrapper>
    <Title>Regras</Title>
    <RulesText>Começar com vogal;</RulesText>
    <RulesText>Letras permitidas: V, D, R e vogais;</RulesText>
    <RulesText>Números são permitidos somente como último caractere;</RulesText>
    <RulesText>Tamanho máximo: 4;</RulesText>
  </Wrapper>
);

export default Rules;