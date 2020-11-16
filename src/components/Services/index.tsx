import React from 'react';

import InfoBlock from 'components/ui/InfoBlock';
import { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface ServiceProps {
  title: string;
  icon: IconProps;
  children: React.ReactNode;
}

export const Service: React.FC<ServiceProps> = ({ title, icon, children }) => {
  return (
    <Styled.ServiceItem>
      <InfoBlock
        icon={icon}
        title={title}
        content={children}
        collapsible={true}
      />
    </Styled.ServiceItem>
  );
};

interface ServicesProps {
  children: React.ReactElement<ServiceProps>[];
}

export const Services: React.FC<ServicesProps> = ({ children }) => {
  return (
    <Styled.Services>
      {children}
    </Styled.Services>
  );
};
