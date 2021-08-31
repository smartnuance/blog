import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as Styled from './styles';

const Logo: React.FC = () => {
  const { site, logo } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "smartnuance.png" }) {
        childImageSharp {
          gatsbyImageData(width: 80, layout: CONSTRAINED)
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const image = getImage(logo);

  return (
    <Styled.Logo to="/">
      {image && (
        <Styled.Image>
          <GatsbyImage image={image} alt={logoTitle} />
        </Styled.Image>
      )}
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
