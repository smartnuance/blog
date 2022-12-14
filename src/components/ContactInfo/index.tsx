import InfoBlock from 'components/ui/InfoBlock';
import { IconProps } from 'phosphor-react';
import React from 'react';
import * as Styled from './styles';

interface Props {
  title: string;
  icon: IconProps;
  children: React.ReactNode;
}

const ContactInfo: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <Styled.ContactInfoItem>
      <InfoBlock icon={icon} title={title} content={children} center />
    </Styled.ContactInfoItem>
  );
};

export default ContactInfo;
