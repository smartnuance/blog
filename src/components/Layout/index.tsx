import { MDXProvider } from '@mdx-js/react';
import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import Footer from 'components/Footer';
import Header from 'components/Header';
import SEO from 'components/SEO';
import Button from 'components/ui/Button';
import Container from 'components/ui/Container';

import CTA from 'components/ui/CTA';
import Quote from 'components/ui/Quote';
import TitleSection from 'components/ui/TitleSection';
import Alert from 'components/ui/Alert';
import Gif from 'components/ui/Gif';
import { AnimatePresence, motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';
import * as Styled from './styles';

// common components usable in mdx files without explicit imports
const shortcodes = { blockquote: Quote, SEO, Container, TitleSection, Link, Button, CTA, Alert };

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <Styled.Layout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
            {/* <Newsletter /> */}
            <Footer />
          </motion.div>
        </Styled.Layout>
      </AnimatePresence>
    </>
  );
};

export default Layout;
