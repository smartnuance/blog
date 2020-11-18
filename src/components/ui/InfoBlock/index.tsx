import React, { useState, useEffect, useMemo } from 'react';

import Icon, { IconProps } from 'components/ui/Icon';
import { useMeasure } from 'react-use';
import { useSpring, animated } from 'react-spring';
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

  const defaultHeight = 300;

  // The height of the content container
  const [contentHeight, setContentHeight] = useState(defaultHeight);

  // Gets the height of the element (ref)
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  // Animations
  const animatedHeight = useSpring({
    height: collapsed ? defaultHeight : contentHeight
  });

  useEffect(() => {
    // Sets initial height
    setContentHeight(height);
  }, [height]);

  const currentlyCollapsible = useMemo(() => collapsible && height > defaultHeight, [
    collapsible,
    height,
    contentHeight
  ]);

  return (
    <Styled.InfoBlock center={center}>
      <Styled.Icon>
        <Icon icon={icon} />
      </Styled.Icon>
      <Styled.Wrapper center={center}>
        <Styled.Content style={currentlyCollapsible ? animatedHeight : undefined}>
          <div ref={ref}>
            <Styled.Title>{title}</Styled.Title>
            {content}
          </div>
          {currentlyCollapsible && collapsed && <Styled.Overlay />}
        </Styled.Content>
        {currentlyCollapsible && (
          <Styled.CollapseButton center onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <Icon icon="chevron-down" /> : <Icon icon="chevron-up" />}
          </Styled.CollapseButton>
        )}
      </Styled.Wrapper>
    </Styled.InfoBlock>
  );
};

export default InfoBlock;
