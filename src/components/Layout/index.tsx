import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Newsletter from 'components/Newsletter';
import Link from 'gatsby-link';
import Container from 'components/ui/Container';
import SEO from 'components/SEO';
import TitleSection from 'components/ui/TitleSection';
import { MDXProvider } from '@mdx-js/react';

import 'assets/styles/global.css';
import GlobalStyles from 'assets/styles/globalStyles';
import * as Styled from './styles';
import Quote from 'components/ui/Quote';

// common components usable in mdx files without explicit imports
const shortcodes = { blockquote: Quote, SEO, Container, TitleSection, Link };

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
