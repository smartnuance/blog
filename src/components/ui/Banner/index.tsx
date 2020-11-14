import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  linkTo: string;
  linkText: string;
}

const Banner: React.FC<Props> = ({ title, subtitle, linkTo, linkText, children }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{children}</Styled.Content>
      <Link to={linkTo}>
        <Button primary>{linkText}</Button>
      </Link>
    </Container>
  </Styled.Banner>
);

export default Banner;
