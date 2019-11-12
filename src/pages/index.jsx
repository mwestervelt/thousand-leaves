import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Jumbotron } from 'reactstrap'
import withLayout from '../layout';
// import Link from '../components/Link';
// import Image from '../components/Image';
import { Helmet } from "react-helmet"
import vista1 from '../images/vista1996.jpg'
import vista2 from '../images/vista2019.jpg'



const IndexPage = () => (
  <>
    <h3>
      {/* <FormattedMessage id="home.placeholder" /> */}
    </h3>
    <Jumbotron >
        <>
           <Helmet>
        <script src="https://cdn.knightlab.com/libs/juxtapose/latest/js/juxtapose.min.js"></script>

      </Helmet>
          <div width="100%" height="1711" className="juxtapose">
            <img alt="2019 vista" src={vista1} />
            <img alt="1996 vista" src={vista2} />
          </div>
        </>
          {/* <iframe title="slider" frameborder="0" className="juxtapose" width="100%" height="1711" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=591043f4-019e-11ea-b9b8-0edaf8f81e27"></iframe> */}
      </Jumbotron>
 
    {/* <Link to="/page-2/">
      <FormattedMessage id="home.Go to page 2" />
    </Link> */}
  </>
);

const customProps = {
  localeKey: 'home', // same as file name in src/i18n/translations/your-lang/index.js
};

export default withLayout(customProps)(IndexPage);
