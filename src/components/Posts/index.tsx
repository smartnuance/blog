import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';

import { ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';

interface Post {
  node: {
    id: string;
    fields: {
      path: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              path
            }
            frontmatter {
              title
              description
              date(formatString: "D. MMMM YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts: Post[] = allMdx.edges;

  return (
    <Container>
      {posts.map((item) => {
        const {
          id,
          fields: { path },
          frontmatter: { title, cover, description, date, tags }
        } = item.node;

        return (
          <Styled.Post key={id}>
            <Link to={path}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <Styled.Card>
                  <Styled.Image>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} />
                  </Styled.Image>
                  <Styled.Content>
                    <Styled.Date>{date}</Styled.Date>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Description>{description}</Styled.Description>
                  </Styled.Content>
                  <Styled.Tags>
                    {tags.map((item) => (
                      <Styled.Tag key={item}>{item}</Styled.Tag>
                    ))}
                  </Styled.Tags>
                </Styled.Card>
              </motion.div>
            </Link>
          </Styled.Post>
        );
      })}
    </Container>
  );
};

export default Posts;
