import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Button } from 'reactstrap'
import withLayout from '../layout';
// import Image from "../components/Image"
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"



const ZecarPage = ({ data }) => {

  return (
    <>
      <br></br>
      <Container>
      <h2 ><strong>
        <FormattedMessage id="zecar.placeholder" />
      </strong>
      </h2>
      <p>
      <FormattedMessage id="zecar.content1" />
    </p>
    <p>
      <FormattedMessage id="zecar.content2" />
    </p>
    <p>
      <FormattedMessage id="zecar.content3" />
    </p>
    <p>
      <FormattedMessage id="zecar.content4" />
    </p>
    </Container>
    <Container className="text-center my-5" >
    <Button color="primary" size="lg">
      <a style={{color: 'white', textDecoration: 'none'}} href="https://kikkerland.com/products/zecar-flywheel-car"><FormattedMessage id="zecar.content5" /></a>
    </Button>
    </Container>
    
      <StaticQuery
        query={zecar}
        render={data => (
          <div>
            {data.images.edges.map(({ node }) => (
              <Container>

                <Img key={node.childImageSharp.fluid} fluid={node.childImageSharp.fluid} />

              </Container>
            ))}
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