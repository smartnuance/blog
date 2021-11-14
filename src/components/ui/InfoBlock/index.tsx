import { CaretDown, CaretUp, IconProps } from 'phosphor-react';
import React, { useEffect, useMemo, useState } from 'react';
import { useMeasure } from 'react-use';
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

  // The height of the content container
  const [contentHeight, setContentHeight] = useState(Styled.defaultContentHeight);

  // Gets the height of the element (ref)
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  // Animations
  const animatedHeight = useMemo(
    () => (collapsed ? Styled.defaultContentHeight : contentHeight),
    [collapsed, contentHeight]
  );

  useEffect(() => {
    // Sets initial height
    setContentHeight(height);
  }, [height]);

  const currentlyCollapsible = useMemo(
    () => collapsible && height > Styled.defaultContentHeight,
    [collapsible, height, contentHeight]
  );

  return (
    <Styled.InfoBlock center={center}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Wrapper center={center}>
        <Styled.Content animate={currentlyCollapsible ? { height: animatedHeight } : undefined}>
          <div ref={ref}>
            <Styled.Title>{title}</Styled.Title>
            {content}
          </div>
          {currentlyCollapsible && collapsed && <Styled.Overlay />}
        </Styled.Content>
        {currentlyCollapsible && (
          <Styled.CollapseButton center onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <CaretDown /> : <CaretUp />}
          </Styled.CollapseButton>
        )}
      </Styled.Wrapper>
    </Styled.InfoBlock>
  );
};

export default InfoBlock;
