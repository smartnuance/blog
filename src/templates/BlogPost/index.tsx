import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import * as Styled from './styles';

interface Post {
  body: string;
  fields: {
    path: string;
  };
  frontmatter: {
    title: string;
    date: string;
    cover: IGatsbyImageData;
    head_cover: IGatsbyImageData;
  };
}

interface Props {
  data: {
    mdx: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.mdx;
  const { previous, next } = pageContext;
  const cover = post.frontmatter.head_cover || post.frontmatter.cover;

  const image = getImage(cover);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        {image && (
          <Styled.Image>
            <GatsbyImage image={image} alt={post.frontmatter.title} />
          </Styled.Image>
        )}
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <MDXRenderer>{post.body}</MDXRenderer>
        <Styled.Links>
          <span>
            {previous && (
              <Link to={previous.fields.path} rel="previous">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </span>
          <span>
            {next && (
              <Link to={next.fields.path} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </span>
        </Styled.Links>
      </Container>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        date(formatString: "D. MMMM YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        head_cover {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
