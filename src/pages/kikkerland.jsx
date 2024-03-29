import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Button } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import aboutkikk from '../images/aboutkikk.jpg'





const KikkerlandPage = () => (
    <>
    <br></br>
    
    <Container>
    <h2><strong>
        <FormattedMessage id="kikkerland.placeholder" />
      </strong>
      </h2>
    <img className="img-fluid" src={aboutkikk} alt="kikkerland products" />
  
    <p>
      <FormattedMessage id="kikkerland.content2" />
    </p>
    <p>
      <FormattedMessage id="kikkerland.content3" />
    </p>

    <Container className="text-center my-5" >
    <Button color="danger" size="lg">
        <a style={{color: 'white', textDecoration: 'none'}} href="https://kikkerland.com/"> <FormattedMessage id="kikkerland.content4" /></a>
     
    </Button>
    </Container>
    
    <Link to="/">
      <FormattedMessage id="page2.Go back to the homepage" />
    </Link>
    <footer className="my-5">
        </footer>
    </Container>
  
  </>
);

const customProps = {
  localeKey: 'kikkerland',
};


export default withLayout(customProps)(KikkerlandPage);
