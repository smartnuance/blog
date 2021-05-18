import styled from 'styled-components';
import tw from 'twin.macro';
import { motion } from 'framer-motion';

export interface StyledProps {
  center?: boolean;
  collapsed?: boolean;
}

export const InfoBlock = styled.div<StyledProps>`
  ${tw`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300`};
  ${({ center }) => center && tw`items-center`};
`;

export const Icon = styled.span`
  ${tw`flex items-center justify-center w-10 h-10 text-indigo-500 border border-purple-400 rounded-full mb-2`};
`;

export const Wrapper = styled.div<StyledProps>`
  ${({ center }) => center && tw`text-center`};
`;

export const Title = styled.h3`
  ${tw`mt-1 font-semibold`};
`;

export const defaultContentHeight = 300;

export const Content = styled(motion.div)`
  ${tw`mt-1 overflow-hidden relative`};
  ${(props: StyledProps) => props.center && tw`text-center`};
`;

export const Overlay = styled.p`
  ${tw`h-16 absolute inset-x-0 bottom-0 z-10`};
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
`;

export const CollapseButton = styled.a<StyledProps>`
  ${({ center }) => center && tw`text-center`};
  ${tw`block w-full`};
`;
