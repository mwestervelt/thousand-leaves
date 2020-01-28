import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"


const ForestPage = () => {
  const data = useStaticQuery(graphql`
  fragment forestImages on File {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    image1: file(relativePath: { eq: "Atlantic forest/Canastra ANTA.jpg" }) {
      ...forestImages
    }
    pond: file(relativePath: { eq: "Atlantic forest/Aiuruoca.jpg" }) {
      ...forestImages
    }
    redflower: file(relativePath: { eq: "Atlantic forest/Bilbergia pyramidalis.JPG" }) {
      ...forestImages
    }
    pond2: file(relativePath: { eq: "Atlantic forest/Bocaina.jpg" }) {
      ...forestImages
    }
    image2: file(relativePath: { eq: "Atlantic forest/fac.jpg" }) {
      ...forestImages
    }
    redflower2: file(relativePath: { eq: "Atlantic forest/Forest flower.jpg" }) {
      ...forestImages
    }
    orchid: file(relativePath: { eq: "Atlantic forest/Orchyd.jpg" }) {
      ...forestImages
    }
    flower: file(relativePath: { eq: "Atlantic forest/Paineira.JPG" }) {
      ...forestImages
    }
    image9: file(relativePath: { eq: "Atlantic forest/5 ipes.jpg" }) {
      ...forestImages
    }
    mata1: file(relativePath: { eq: "Atlantic forest/mata 01.JPG" }) {
      ...forestImages
    }
    mata4: file(relativePath: { eq: "Atlantic forest/mata 04.JPG" }) {
      ...forestImages
    }
    parrot: file(relativePath: { eq: "Atlantic forest/Parrot.jpg" }) {
      ...forestImages
    }
    allFile(filter: {relativeDirectory: {eq: "Atlantic forest/flowers"}}) {
      edges {
        node {
          childImageSharp {
             fluid(maxWidth: 4000) {
              aspectRatio
              originalName
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
  return (
    <>
      <br></br>
      <Container>
        <Row className="row no-gutters">
          <Col>
            <Img fluid={data.image1.childImageSharp.fluid} />
            <small class="form-text text-muted"> <FormattedMessage id="atlForest.caption1" /></small>
          </Col>
        </Row>
        <br></br>
        <h2><strong>
          <FormattedMessage id="atlForest.placeholder" /></strong>
        </h2>
        <p>
          <FormattedMessage id="atlForest.content1" />
        </p>
        <Row className="row no-gutters">
          <Col>
            <Img fluid={data.image2.childImageSharp.fluid} />
            <div class="card-footer"> <FormattedMessage id="atlForest.caption2" /></div>
          </Col>
        </Row>
        <br></br>
        <p>
          <FormattedMessage id="atlForest.content2" />
        </p>
        <p>
          <FormattedMessage id="atlForest.content3" />
        </p>
        <Row className="row no-gutters">
          <Col>
            <Img fluid={data.pond.childImageSharp.fluid} />
            <div class="card-footer"> <FormattedMessage id="atlForest.caption3" /></div>
          </Col>
        </Row>
        <br></br>
        <p>
          <FormattedMessage id="atlForest.content4" />
        </p>
        <p>
          <FormattedMessage id="atlForest.content5" />
        </p>

        <Container fluid>
        <Row>
            <div class="py-4 col-lg-6">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.redflower.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="atlForest.redflower" />
                </div>
              </div>
            </div>
            <div class="py-4 col-lg-6">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.flower.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="atlForest.panera" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col-lg-5">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.redflower2.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="atlForest.redflower2" />
                </div>
              </div>
            </div>
            <div class="py-4 col-lg-7">
              <div class="card h-100 border-0">
                <Img sizes={{ ...data.orchid.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="atlForest.orchid" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col d-flex">
              <div class="card flex-fill border-0 h-100">
                <Img sizes={{ ...data.mata1.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="atlForest.mata1" />
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="py-4 col d-flex">
              <div class="card flex-fill border-0 h-100">
                <Img sizes={{ ...data.mata4.childImageSharp.fluid }} className="card-img-top" />
                <div class="card-footer">
                  <FormattedMessage id="atlForest.mata4" />
                </div>
              </div>
            </div>
          </Row>
        </Container>
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
  localeKey: 'atlForest',
};


export default withLayout(customProps)(ForestPage);
