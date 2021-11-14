import { Link } from 'gatsby';
import React from 'react';
import Button from '../Button';
import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  center?: boolean;
  to: string;
  label: string;
}

const CTA: React.FC<Props> = ({ center, to, label }) => (
  <Styled.CTA center={center}>
    <Link to={to}>
      <Button primary>{label}</Button>
    </Link>
  </Styled.CTA>
);

export default CTA;
