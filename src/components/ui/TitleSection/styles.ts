import styled from 'styled-components';
import tw from 'twin.macro';

export interface StyledProps {
  center?: boolean;
}

export const TitleRow = styled.div`
  ${tw`flex flex-row w-full`};
`;

export const Logo = styled.img`${tw``}`;

export const TitleSection = styled.div`
  ${tw`flex flex-col w-full`};
`;

export const Title = styled.h2<StyledProps>`
  ${tw`uppercase mb-4 font-bold w-full text-left mt-0`};
  ${({ center }) => center && tw`text-center`};
`;

export const SubTitle = styled.p<StyledProps>`
  ${tw`text-xs text-indigo-600 w-full text-left`};
  ${({ center }) => center && tw`text-center`};
`;

export const Separator = styled.h2<StyledProps>`
  ${tw`relative w-2 h-8 mb-6 -mt-2`};
  ${({ center }) => center && tw`mx-auto`};

  &:before {
    content: '';
    ${tw`bg-indigo-500 h-full w-px absolute left-0`};
  }

  &:after {
    content: '';
    ${tw`bg-green-400 h-6 w-px absolute ml-1`};
  }
`;
