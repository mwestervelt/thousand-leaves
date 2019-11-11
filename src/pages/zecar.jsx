import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';




const ZecarPage = () => (
    <>
    <br></br>
    
    <Container>
    <h2>
      <FormattedMessage id="zecar.placeholder" />
    </h2>
    <p>
      <FormattedMessage id="zecar.content1" />
    </p>
    <p>
      <FormattedMessage id="zecar.content2" />
    </p>
    <p>
      <FormattedMessage id="zecar.content3" />
    </p>
    <p>
      <FormattedMessage id="zecar.content4" />
    </p>


    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    </Container>
  
  </>
);

const customProps = {
  localeKey: 'zecar',
};


export default withLayout(customProps)(ZecarPage);
