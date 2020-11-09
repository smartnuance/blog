import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

const shortcodes = { Link }; // Provide common components here

interface Post {
  body: string;
  fields: {
    path: string;
  };
  frontmatter: {
    title: string;
    date: string;
    cover: {
      childImageSharp: {
        fluid: ImageSharpFluid;
      };
    };
    head_cover: {
      childImageSharp: {
        fluid: ImageSharpFluid;
      };
    };
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

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <Container section>
        <Styled.Image>
          <Img fluid={cover.childImageSharp.fluid} alt={post.frontmatter.title} />
        </Styled.Image>
        <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        head_cover {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
