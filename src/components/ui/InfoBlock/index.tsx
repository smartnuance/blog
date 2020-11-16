import React, { useState } from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';

interface Props extends Styled.StyledProps {
  icon: IconProps;
  title: string;
  content: React.ReactNode;
  center?: boolean;
  collapsible?: boolean;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center, collapsible }) => {
  const [collapsed, setCollapsed] = collapsible ? useState(true) : [false, () => {}];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Styled.InfoBlock center={center}>
      <Styled.Icon>
        <Icon icon={icon} />
      </Styled.Icon>
      <Styled.Wrapper center={center}>
        <Styled.Content collapsed={collapsed}>
          <Styled.Title>{title}</Styled.Title>
          {content}
          {collapsed && <Styled.Overlay />}
        </Styled.Content>
        {collapsible && (
          <Styled.CollapseButton center onClick={toggleCollapsed}>
            {collapsed ? <Icon icon="chevron-down" /> : <Icon icon="chevron-up" />}
          </Styled.CollapseButton>
        )}
      </Styled.Wrapper>
    </Styled.InfoBlock>
  );
};

export default InfoBlock;
