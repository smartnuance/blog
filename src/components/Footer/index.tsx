import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link
          href="https://gitlab.com/smartnuance"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitLab
        </Styled.Link>
        <Styled.Link
          href="https://github.com/gitsimon"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link href="/privacy/"
          rel="noreferrer noopener"
        >
          Privacy
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;