import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';




const ProjectPage = () => (
    <>
    <br></br>
    
    <Container>
    <h2>
      <FormattedMessage id="project.placeholder" />
    </h2>
    <p>
      <FormattedMessage id="project.content1" />
    </p>
    <p>
      <FormattedMessage id="project.content2" />
    </p>
    <p>
      <FormattedMessage id="project.content3" />
    </p>
    <p>
      <FormattedMessage id="project.content4" />
    </p>
    <p>
      <FormattedMessage id="project.content5" />
    </p>
    <p>
      <FormattedMessage id="project.content6" />
    </p>
    <p>
      <FormattedMessage id="project.content7" />
    </p>
    <p>
      <FormattedMessage id="project.content8" />
    </p>
    <p>
      <FormattedMessage id="project.content9" />
    </p>
    <p>
      <FormattedMessage id="project.content10" />
    </p>
    <p>
      <FormattedMessage id="project.content11" />
    </p>
    <p>
      <FormattedMessage id="project.content12" />
    </p>

    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    </Container>
  
  </>
);

const customProps = {
  localeKey: 'project',
};


export default withLayout(customProps)(ProjectPage);
