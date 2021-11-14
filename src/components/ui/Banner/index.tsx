import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import React from 'react';
import * as Styled from './styles';

interface Props {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Banner: React.FC<Props> = ({ title, subtitle, children }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{children}</Styled.Content>
    </Container>
  </Styled.Banner>
);

export default Banner;
