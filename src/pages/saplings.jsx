import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"



const SaplingsPage = () => {

  const data = useStaticQuery(graphql`
  fragment saplings on File {
    childImageSharp {
      fluid(maxHeight: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    fert1: file(relativePath: { eq: "Saplings/Fertilizer 01.jpg" }) {
      ...saplings
    }
    fert2: file(relativePath: { eq: "Saplings/Fertilizer 02.jpg" }) {
      ...saplings
    }
    jun1: file(relativePath: { eq: "Saplings/Juninho 01.JPG" }) {
      ...saplings
    }
    jun2: file(relativePath: { eq: "Saplings/Juninho 02.JPG" }) {
      ...saplings
    }
    jun3: file(relativePath: { eq: "Saplings/Juninho 03.JPG" }) {
      ...saplings
    }
    jun4: file(relativePath: { eq: "Saplings/Juninho Lista.JPG" }) {
      ...saplings
    }
    kiko1: file(relativePath: { eq: "Saplings/Kiko 01.jpg" }) {
      ...saplings
    }
    kiko2: file(relativePath: { eq: "Saplings/Kiko 02.jpg" }) {
      ...saplings
    }
    kiko3: file(relativePath: { eq: "Saplings/Kiko 03.jpg" }) {
      ...saplings
    }
    luis1: file(relativePath: { eq: "Saplings/Luisinho 01.jpg" }) {
      ...saplings
    }
    luis2: file(relativePath: { eq: "Saplings/Luisinho 02.jpg" }) {
      ...saplings
    }
  }
  `)

  return (
    <>
      <br></br>
      <Container>
        <br></br>
        <h2><strong>
          <FormattedMessage id="saplings.placeholder" />
        </strong>
        </h2>
        {/* put photo Gallery here */}
      
        <Row>
            <div class="py-4 col-lg">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.jun1.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.jun1" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col-lg-7">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.jun2.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.jun2" />
                </div>
              </div>
            </div>
            <div class="py-4 col-lg-5">
              <div class="card flex-fill border-0 h-100">
                <Img sizes={{ ...data.jun3.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.jun3" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col-lg">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.jun4.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.jun4" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col-lg">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.fert2.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.fert2" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col-lg">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.kiko1.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.kiko1" />
                </div>
              </div>
            </div>
            <div class="py-4 col-lg">
              <div class="card flex-fill border-0 h-100">
                <Img sizes={{ ...data.kiko2.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.kiko2" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col-lg-8">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.luis1.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.luis1" />
                </div>
              </div>
            </div>
            <div class="py-4 col-lg-4">
              <div class="card flex-fill border-0 h-100">
                <Img sizes={{ ...data.luis2.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="saplings.luis2" />
                </div>
              </div>
            </div>
          </Row>





        <br></br>
        <Link to="/">
          <FormattedMessage id="page2.Go back to the homepage" />
        </Link>
        <footer className="my-5">
        </footer>
      </Container>
    </>
  )
};

const customProps = {
  localeKey: 'saplings',
};

export default withLayout(customProps)(SaplingsPage);