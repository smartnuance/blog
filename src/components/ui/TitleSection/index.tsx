import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';

interface Props extends StyledProps {
  title: string;
  subtitle?: string;
  logoURL?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle, logoURL }) => (
  <Styled.TitleRow>
    <Styled.TitleSection>
        {subtitle && <Styled.SubTitle center={center}>{title}</Styled.SubTitle>}
        <Styled.Title center={center}>{subtitle}</Styled.Title>
        <Styled.Separator center={center} />
    </Styled.TitleSection>
    {logoURL && <Styled.Logo src={logoURL} width="80px" />}
  </Styled.TitleRow>
);

export default TitleSection;
