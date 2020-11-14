import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle } from 'helpers/definitions';

import FormatHtml from 'components/utils/FormatHtml';

interface SectionHeroBanner extends SectionTitle {
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
        frontmatter {
          title
          subtitle
          linkTo
          linkText
        }
        html
      }
    }
  `);

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
    >
      <FormatHtml content={markdownRemark.html} />
    </Banner>
  );
};

export default HeroBanner;
