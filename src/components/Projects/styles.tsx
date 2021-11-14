import styled from 'styled-components';
import tw from 'twin.macro';

export const Posts = styled.div`
  ${tw`w-full flex flex-wrap`};
`;

export const Post = styled.div`
  ${tw`w-full sm:w-1/2 p-3`};
`;

export const Card = styled.div`
  ${tw`relative w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300`};
`;

export const Content = styled.div`
  ${tw`p-4 text-indigo-900`};
`;

export const Image = styled.figure`
  ${tw`w-full`};
`;

export const Titles = styled.div`
  ${tw`flex flex-col`};
`;

export const TitleRow = styled.div`
  ${tw`flex flex-row flex-nowrap justify-between`};
`;

export const Title = styled.p`
  ${tw`font-semibold`};
`;

export const Description = styled.p`${tw`text-sm pt-5`}`;

export const Logo = styled.img`${tw`ml-2`}`;

export const Date = styled.h3`
  ${tw`text-xs text-indigo-500`};
`;

export const Tags = styled.div`
  ${tw`p-4 pt-2 mt-auto`}
`;

export const Tag = styled.span`
  ${tw`text-xs text-indigo-900 border border-green-200 rounded-full px-2 py-1 mr-2`}
`;
