import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
  }

  p {
    ${tw`block`};
  }
  
  p + p {
    ${tw`mt-3`};
  }
  
  h1 {
    ${tw`text-lg mt-6 mb-4 font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate`};
  }

  h2 {
    ${tw`mt-6 mb-4 font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate`};
  }

  ul {
    ${tw`list-disc my-3 pl-5`};
  }

  li {
    ${tw`mt-3`};
  }

  table {
    ${tw`my-5 min-w-full leading-normal`};
  }

  th {
    ${tw`px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider align-bottom`};
  }

  td {
    ${tw`px-5 py-5 border-b border-gray-200 text-sm align-top`};
  }

  figcaption {
    ${tw`text-center mt-2 text-gray-600`};
  }
`;
