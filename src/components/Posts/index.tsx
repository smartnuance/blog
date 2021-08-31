import Container from 'components/ui/Container';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
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
      cover: IGatsbyImageData;
    };
  };
}

const Posts: React.FC = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
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
                  gatsbyImageData(width: 800, layout: CONSTRAINED)
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

        const image = getImage(cover);

        return (
          <Styled.Post key={id}>
            <Link to={path}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                <Styled.Card>
                  {image && (
                    <Styled.Image>
                      <GatsbyImage image={image} alt={title} />
                    </Styled.Image>
                  )}
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
