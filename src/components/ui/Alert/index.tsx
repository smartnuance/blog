import React from 'react';
import { Info, Warning } from 'phosphor-react';
import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  warning?: boolean;
  children: React.ReactNode;
}

const Alert: React.FC<Props> = ({ warning, children }) => (
  <Styled.Alert warning={warning} role="alert">
    <Styled.Container>
      <Styled.Icon>{warning ? <Warning /> : <Info />}</Styled.Icon>
      <Styled.Title>{children}</Styled.Title>
    </Styled.Container>
  </Styled.Alert>
);

export default Alert;
