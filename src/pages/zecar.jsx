import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Button } from 'reactstrap'
import withLayout from '../layout';
// import Image from "../components/Image"
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"



const ZecarPage = ({ data }) => {
  const zec1 = data.images.edges[0].node.childImageSharp.fluid
  const zec2 = data.images.edges[1].node.childImageSharp.fluid
  const zec3 = data.images.edges[2].node.childImageSharp.fluid

  return (
    <>
      <br></br>
      <Container>
          <Img key={zec2.src} fluid={zec2} />
          <small class="form-text text-muted"> <FormattedMessage id="zecar.zecar1" /></small>

          <br></br>
        <h2>
          <strong>
            <FormattedMessage id="zecar.placeholder" />
          </strong>
        </h2>
        <p>
          <FormattedMessage id="zecar.content1" />
        </p>
        <p>
          <FormattedMessage id="zecar.content2" />
        </p>
        <Img key={zec1.src} fluid={zec1} />
        <small class="form-text text-muted"> <FormattedMessage id="zecar.zecar2" /></small>

        <br></br>
        <p>
          <FormattedMessage id="zecar.content3" />
        </p>
        <p>
          <FormattedMessage id="zecar.content4" />
        </p>
        <Img key={zec3.src} fluid={zec3} />
        <small class="form-text text-muted"> <FormattedMessage id="zecar.zecar3" /></small>

        <br></br>
      </Container>
      <Container className="text-center my-5" >
        <Button  color="primary" size="lg">
          <a style={{ color: 'white', textDecoration: 'none' }} href="https://kikkerland.com/products/zecar-flywheel-car"  rel="noopener noreferrer" target="_blank"><FormattedMessage id="zecar.content5" /></a>
        </Button>
      </Container>

      <StaticQuery
        query={zecar}
        render={data => (
          <div>
          </div>
        )}
      />
    </>
  )
};

const customProps = {
  localeKey: 'zecar',
};




export default withLayout(customProps)(ZecarPage);

const zecar = graphql`
query zecar {
    images: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "zecar"}}) {
      edges {
        node {
          childImageSharp {
             fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`