import styled from 'styled-components';
import tw from 'twin.macro';

export interface StyledProps {
  center?: boolean;
}

export const CTA = styled.div<StyledProps>`
  ${tw`mt-10`};
  ${({ center }) => center && tw`text-center`};
`;
