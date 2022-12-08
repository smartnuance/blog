import { Logo } from 'components/Header/Logo/styles';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import * as Styled from './styles';

interface Post {
  body: string;
  fields: {
    path: string;
  };
  frontmatter: {
    title: string;
    date: string;
    logo?: {
      publicURL: string;
    };
    cover: IGatsbyImageData;
    cover_og: IGatsbyImageData;
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

  const image = getImage(post.frontmatter.head_cover || post.frontmatter.cover);

  return (
    <Layout>
      <SEO title={post.frontmatter.title} image={post.frontmatter.cover_og} />
      <Container section>
        {image && (
          <Styled.Image>
            <GatsbyImage image={image} alt={post.frontmatter.title} />
          </Styled.Image>
        )}
        <TitleSection
          title={post.frontmatter.date}
          subtitle={post.frontmatter.title}
          logoURL={post.frontmatter.logo?.publicURL}
        />
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
    {/*       
      <Container section>
        Subscribe to my{' '}
        <Link to="https://smartnuance.m-pages.com/blog" rel="next">
          newsletter
        </Link>{' '}
        and learn about exiting code & their evolution!
      </Container> */}
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
        cover_og: cover {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 630, layout: FIXED, transformOptions: { fit: CONTAIN })
          }
        }
        head_cover {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        logo {
          publicURL
        }
      }
    }
  }
`;
