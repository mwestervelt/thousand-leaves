import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import Gallery from '../components/Gallery';



const ProjectPage = ({ data }) => (
  <>
    <br></br>

    <Container>
      <StaticQuery
        query={graphql`
        query {
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
        `}
        render={data => (
          <Row className="row no-gutters align-items-center">
            <Col>
            <Img key={data.before.edges[0].src} fluid={data.before.edges[0].node.childImageSharp.fluid}/>
            </Col>
            <Col>
            <Img key={data.after.edges[0].src} fluid={data.after.edges[0].node.childImageSharp.fluid}/>
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
