import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
// import Gallery from '../components/Gallery';



const ProjectPage = () => {
  const data = useStaticQuery(graphql`
  fragment aboutImages on File {
    childImageSharp {
      fluid(maxHeight: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    image1: file(relativePath: { eq: "The-project/06 Google Earth 2019.jpg" }) {
      ...aboutImages
    }
    image2: file(relativePath: { eq: "The-project/04 Aerial Photo '94.jpg" }) {
      ...aboutImages
    }
    image3: file(relativePath: { eq: "The-project/05 Map of Altimetry.jpg" }) {
      ...aboutImages
    }
    image4: file(relativePath: { eq: "The-project/09 Children.jpg" }) {
      ...aboutImages
    }
    image5: file(relativePath: { eq: "The-project/10 Children.jpg" }) {
      ...aboutImages
    }
    image6: file(relativePath: { eq: "The-project/08 Children.jpg" }) {
      ...aboutImages
    }
    image7: file(relativePath: { eq: "The-project/07 Children.jpg" }) {
      ...aboutImages
    }
    before: file(relativePath: { eq: "The-project/1996.jpg" }) {
      ...aboutImages
    }
    after: file(relativePath: { eq: "The-project/2016.jpg" }) {
      ...aboutImages
    }
  }
`)
  return (
    <>
      <br></br>
      <Container>
        <Row className="row no-gutters">
          <Col>
            <Img fluid={data.before.childImageSharp.fluid} />
          </Col>
          <Col>
            <Img fluid={data.after.childImageSharp.fluid} />
          </Col>
        </Row>
        <br></br>
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

        <Row >
          <Col className="col-7">
            <Img key={data.image4.childImageSharp.fluid.src} fluid={data.image4.childImageSharp.fluid} />
          </Col>
          <Col>
            <Img key={data.image5.childImageSharp.fluid.src} fluid={data.image5.childImageSharp.fluid} />
          </Col>
        </Row>

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

        <Row >
          <Col>
            <Img key={data.image6.childImageSharp.fluid.src} fluid={data.image6.childImageSharp.fluid} />
          </Col>
          <Col>
            <Img key={data.image7.childImageSharp.fluid.src} fluid={data.image7.childImageSharp.fluid} />
          </Col>
        </Row>

        <br></br>

        <Link to="/">
          <FormattedMessage id="page2.Go back to the homepage" />
        </Link>
      </Container>

    </>
  )
};

const customProps = {
  localeKey: 'project',
};


export default withLayout(customProps)(ProjectPage);



