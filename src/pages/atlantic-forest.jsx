import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import Gallery from '../components/Gallery';



const ForestPage = () => {
  const data = useStaticQuery(graphql`
  fragment aboutImages on File {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    image1: file(relativePath: { eq: "Atlantic forest/Canastra ANTA.jpg" }) {
      ...aboutImages
    }
    pond: file(relativePath: { eq: "Atlantic forest/Aiuruoca.jpg" }) {
      ...aboutImages
    }
    redflower: file(relativePath: { eq: "Atlantic forest/Bilbergia pyramidalis.JPG" }) {
      ...aboutImages
    }
    pond2: file(relativePath: { eq: "Atlantic forest/Bocaina.jpg" }) {
      ...aboutImages
    }
    image2: file(relativePath: { eq: "Atlantic forest/fac.jpg" }) {
      ...aboutImages
    }
    redflower2: file(relativePath: { eq: "Atlantic forest/Forest flower.jpg" }) {
      ...aboutImages
    }
    orchid: file(relativePath: { eq: "Atlantic forest/Orchyd.jpg" }) {
      ...aboutImages
    }
    flower: file(relativePath: { eq: "Atlantic forest/Paineira.JPG" }) {
      ...aboutImages
    }
    image9: file(relativePath: { eq: "Atlantic forest/5 Ipês na mata.jpg" }) {
      ...aboutImages
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
          </Col>
        </Row>
        <br></br>
        <p>
          <FormattedMessage id="atlForest.content4" />
        </p>
        <p>
          <FormattedMessage id="atlForest.content5" />
        </p>
        <Gallery
            itemsPerRow={[1,2]} 
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid
            }))}
          />
        {/* <Row>
          <Col>
            <Img fluid={data.redflower.childImageSharp.fluid} />
          </Col>
          <Col className="col-md-8">
            <Img fluid={data.orchid.childImageSharp.fluid} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Img fluid={data.redflower2.childImageSharp.fluid} />
          </Col>
          <Col>
            <Img fluid={data.flower.childImageSharp.fluid} />
          </Col>
        </Row> */}
        <br></br>


        <Link to="/">
          <FormattedMessage id="page2.Go back to the homepage" />
        </Link>
      </Container>

    </>
  )
};

const customProps = {
  localeKey: 'atlForest',
};


export default withLayout(customProps)(ForestPage);
