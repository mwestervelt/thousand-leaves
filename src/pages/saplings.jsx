import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { StaticQuery, graphql } from 'gatsby';
// import Img from "gatsby-image"
import Gallery from '../components/Gallery';



const SaplingsPage = ({ data }) => {

  return (
    <>
      <br></br>
      <Container>
        {/* <Img fluid={{ ...data.kids.childImageSharp.fluid, aspectRatio: 1.77 }} /> */}
        <br></br>
        <h2><strong>
          <FormattedMessage id="saplings.placeholder" />
        </strong>
        </h2>


        {/* put photo Gallery here */}
        <StaticQuery
        query= {graphql`
        {
          allFile(filter: {relativeDirectory: {eq: "Saplings"}}) {
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
        render= {data => (
          <Gallery
            itemsPerRow={[1,2]} 
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid
            }))}
          />
        )}
      />
        <Link to="/">
          <FormattedMessage id="page2.Go back to the homepage" />
        </Link>
      </Container>
    </>
  )
};

const customProps = {
  localeKey: 'saplings',
};

export default withLayout(customProps)(SaplingsPage);