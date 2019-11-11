import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';




const ReforestPage = () => (
    <>
    <br></br>
    
    <Container>
    <h2>
      <FormattedMessage id="reforest.placeholder" />
    </h2>
    <p>
      <FormattedMessage id="reforest.content1" />
    </p>
    <p>
      <FormattedMessage id="reforest.content2" />
    </p>
    <p>
      <FormattedMessage id="reforest.content3" />
    </p>
    <p>
      <FormattedMessage id="reforest.content4" />
    </p>
    <p>
      <FormattedMessage id="reforest.content5" />
    </p>
    <p>
      <FormattedMessage id="reforest.content6" />
    </p>
    <p>
      <FormattedMessage id="reforest.content7" />
    </p>
    <p>
      <FormattedMessage id="reforest.content8" />
    </p>
    <p>
      <FormattedMessage id="reforest.content9" />
    </p>
    <p>
      <FormattedMessage id="reforest.content10" />
    </p>
    <p>
      <FormattedMessage id="reforest.content11" />
    </p>
    <p>
      <FormattedMessage id="reforest.content12" />
    </p>
    <p>
      <FormattedMessage id="reforest.content13" />
    </p>
   

    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    </Container>
  
  </>
);

const customProps = {
  localeKey: 'reforest',
};


export default withLayout(customProps)(ReforestPage);
