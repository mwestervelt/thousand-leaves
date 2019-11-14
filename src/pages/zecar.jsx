import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
// import Image from "../components/Image"
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"






const ZecarPage = ({ data }) => {


    return (

        <StaticQuery
        query={zecar} 
         

            render={data => {
               
              data.images.edges.map( node => {
                console.log(node)
                return (
           
                    <>
                <Img   
  
      title="Photo image"
      alt="Photo"
      fluid={node.fluid}></Img>
                
                    </>
                )
              })
               
                }
            }
        />
    )
};

const customProps = {
    localeKey: 'zecar',
};

const zecar = graphql`
query zecar {
    images: allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "zecar"}}) {
      edges {
        node {
          childImageSharp {
             fluid(maxWidth: 1000, maxHeight: 700) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`


export default withLayout(customProps)(ZecarPage);
