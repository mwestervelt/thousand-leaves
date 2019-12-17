import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
// import Gallery from '../components/Gallery';



const ProjectPage = () => (
  <>
    <br></br>
    <Container>
      <StaticQuery
        query={q}
        render={data => (
          <Row className="row no-gutters align-items-center">
            <Col>
              <Img key={data.before.edges[0].src} fluid={data.before.edges[0].node.childImageSharp.fluid} />
            </Col>
            <Col>
              <Img key={data.after.edges[0].src} fluid={data.after.edges[0].node.childImageSharp.fluid} />
            </Col>
          </Row>
        )}
      />
      <br></br>
      {/* <Img key={kids.src} fluid={kids[0].node.childImageSharp.fluid} /> */}
      <h2><strong>
        <FormattedMessage id="project.placeholder" />
      </strong>
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
      <StaticQuery
        query={q}
        render={data => (
          <>
            <Row className="row">
              <Col>
                <Img key={data.image1.childImageSharp.fluid.src} fluid={data.image1.childImageSharp.fluid} />
              </Col>
            </Row><br></br>
            <Row>
              <Col className="col-7">
                <Img key={data.image3.childImageSharp.fluid.src} fluid={data.image3.childImageSharp.fluid} />
              </Col>
              <Col>
                <Img key={data.image2.childImageSharp.fluid.src} fluid={data.image2.childImageSharp.fluid} />
              </Col>
            </Row>
          </>
        )}
      />
      <br></br>
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
      <StaticQuery
        query={q}
        render={data => (
            <Row >
              <Col className="col-7">
                <Img key={data.image4.childImageSharp.fluid.src} fluid={data.image4.childImageSharp.fluid} />
              </Col>
              <Col>
                <Img key={data.image5.childImageSharp.fluid.src} fluid={data.image5.childImageSharp.fluid} />
              </Col>
            </Row>
        )}
      />
      <br></br>
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
      <StaticQuery
        query={q}
        render={data => (
            <Row >
              <Col>
                <Img key={data.image6.childImageSharp.fluid.src} fluid={data.image6.childImageSharp.fluid} />
              </Col>
              <Col>
                <Img key={data.image7.childImageSharp.fluid.src} fluid={data.image7.childImageSharp.fluid} />
              </Col>
            </Row>
        )}
      />
      <br></br>

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

const q = graphql`
  query birdseye {
    image1: file(relativePath: { eq: "The-project/06 Google Earth 2019.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "The-project/04 Aerial Photo '94.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "The-project/05 Map of Altimetry.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "The-project/09 Children.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "The-project/10 Children.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, maxHeight: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "The-project/08 Children.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "The-project/07 Children.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, maxHeight: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    before: allFile(filter: {relativePath: {eq: "The-project/1996.jpg"}}) {
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
    after: allFile(filter: {relativePath: {eq: "The-project/2016.jpg"}}) {
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
`
