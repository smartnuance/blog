import { createGlobalStyle } from 'styled-components';
import tw from 'tailwind.macro';

export default createGlobalStyle`
  body {
    ${tw`m-0 text-indigo-900 bg-white`};
  }

  a {
    ${tw`text-indigo-600 hover:text-indigo-700`};
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
`;
