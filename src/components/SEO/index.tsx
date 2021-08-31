import { graphql, useStaticQuery } from 'gatsby';
import { getSrc, ImageDataLike } from 'gatsby-plugin-image';
import React from 'react';
import Helmet from 'react-helmet';

type Meta =
  | {
      name: string;
      content: any;
    }
  | {
      property: string;
      content: any;
    };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  image?: ImageDataLike;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const imageSrc = image && getSrc(image);
  const ogImage = imageSrc
    ? [
        {
          name: `og:image`,
          content: imageSrc
        }
      ]
    : [];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        ...ogImage
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [] as Meta[],
  description: ``
};

export default SEO;
