import React from 'react';

import * as Styled from './styles';

interface Props {
  children: React.ReactNode;
}

const Quote: React.FC<Props> = ({ children }) => (
  <Styled.Quote>
    <Styled.Hyphen aria-hidden="true">&ldquo;</Styled.Hyphen>
    {children}
  </Styled.Quote>
);

export default Quote;
