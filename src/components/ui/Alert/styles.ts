import styled from 'styled-components';
import tw from 'twin.macro';

export interface StyledProps {
  warning?: boolean;
}

export const Alert = styled.div<StyledProps>`
  outline: none !important;
  ${tw`border-t-4 border-green-500 rounded-b px-4 py-3 mt-2 mb-5 shadow-md`};

  ${({ warning }) =>
    warning ? tw`bg-yellow-100 border-yellow-500 text-yellow-900` : tw`bg-green-100 border-green-500 text-green-900`};
`;

export const Container = styled.div<StyledProps>`
  ${tw`flex`};
`;

export const Icon = styled.div<StyledProps>`
  ${tw`py-1 mr-2`};
`;

export const Title = styled.p<StyledProps>`
  ${tw`text-sm`};
`;
