import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';




const ForestPage = () => (
    <>
    <br></br>
    
    <Container>
    <h2>
      <FormattedMessage id="atlForest.placeholder" />
    </h2>
    <p>
      <FormattedMessage id="atlForest.content1" />
    </p>
    <p>
      <FormattedMessage id="atlForest.content2" />
    </p>
    <p>
      <FormattedMessage id="atlForest.content3" />
    </p>
    <p>
      <FormattedMessage id="atlForest.content4" />
    </p>
    <p>
      <FormattedMessage id="atlForest.content5" />
    </p>
   

    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    </Container>
  
  </>
);

const customProps = {
  localeKey: 'atlForest',
};


export default withLayout(customProps)(ForestPage);
