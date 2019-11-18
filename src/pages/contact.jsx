import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

import withLayout from '../layout';
import Link from '../components/Link';

const ContactPage = () => (
  <>
    <Container>
        <br></br>
    <h2><strong>
      <FormattedMessage id="contact.placeholder" /></strong>
    </h2>
  
 <Form>
     <FormGroup>
       <Label for="exampleEmail">Name</Label>
       <Input type="text" name="email" id="exampleEmail" placeholder="Name" />
     </FormGroup>
     <FormGroup>
       <Label for="examplePassword">Email</Label>
       <Input type="email" name="email" id="examplePassword" placeholder="Email" />
     </FormGroup>
     <FormGroup>
       <Label for="exampleText">Message</Label>
       <Input type="textarea" name="text" id="exampleText" />
     </FormGroup>
     <Button color="success"><FormattedMessage id="contact.submit" /></Button>
   </Form>

    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    </Container>
  </>
);

const customProps = {
  localeKey: 'contact',
};

export default withLayout(customProps)(ContactPage);

