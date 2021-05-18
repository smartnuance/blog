import styled from 'styled-components';
import tw from 'twin.macro';

export const Quote = styled.blockquote`
  ${tw`relative p-4 ml-8 md:ml-16 italic`};
`;

export const Hyphen = styled.div`
  font-size: 5rem;
  right: 100%;
  ${tw`mr-2 font-mono absolute top-0 leading-none`}
`;
