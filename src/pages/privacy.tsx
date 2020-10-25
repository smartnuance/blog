import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import FormatHtml from 'components/utils/FormatHtml';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';



const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <Container section>
        <TitleSection title="Privacy" subtitle="Let's make it simple" />
        <SEO title="Privacy" />
        <FormatHtml content="This website respects your privacy by not storing or collecting any data. There are no client-side analytics or third-party trackers of any kind. Enjoy this unique experience in the web." />
      </Container>
    </Layout>
  );
};

export default PrivacyPage;
