import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';
import * as Styled from './styles';

interface Experience {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Experience: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "experiences section" } }) {
        html
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              position
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const prelude = markdownRemark.html
  const experiences: Experience[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      <Styled.Content>
        <FormatHtml content={prelude} />
      </Styled.Content>

      {experiences.map((item) => {
        const {
          id,
          html,
          frontmatter: { company, position, startDate, endDate }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={company}
            subtitle={position}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Experience;
