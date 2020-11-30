import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Quote = styled.blockquote`
  ${tw`relative p-4 ml-8 md:ml-16 italic bg-neutral-100 text-neutral-600`};
`;

export const Hyphen = styled.div`
  font-size: 5rem;
  right: 100%;
  ${tw`mr-2 font-dank-mono text-neutral-500 absolute top-0 leading-none`}
`;
