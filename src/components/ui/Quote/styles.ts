import styled from 'styled-components';
import tw from 'twin.macro';

export const Quote = styled.blockquote`
  ${tw`relative p-4 ml-8 md:ml-16 italic`};
`;

export const Hyphen = styled.div`
  font-size: 3rem;
  right: 100%;
  ${tw`pt-4 mr-2 font-mono absolute top-0 leading-none text-indigo-600`}
`;
