import Container from 'components/ui/Container';
import Icon from 'components/ui/Icon';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { ImageSharpFluid } from 'helpers/definitions';
import React from 'react';
import * as Styled from './styles';

interface Project {
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

const Projects: React.FC = () => {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { category: { eq: "blog" }, type: { eq: "project" }, published: { eq: true } } }
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

  const projects: Project[] = allMdx.edges;

  return (
    <Container>
      {projects.map((item) => {
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
                  <Styled.Icon>
                      <Icon icon="code-branch" />
                </Styled.Icon>
                </Styled.Card>
              </motion.div>
            </Link>
          </Styled.Post>
        );
      })}
    </Container>
  );
};

export default Projects;
