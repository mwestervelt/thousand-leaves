import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import Gallery from '../components/Gallery';



const ToolsPage = () => {
  // console.log(data.allFile.edges);
  const data = useStaticQuery(graphql`
  fragment tools on File {
    childImageSharp {
      fluid(maxHeight: 850) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    tools1: file(relativePath: { eq: "Tools/07 Botas.jpg" }) {
        ...tools
    }
    tools2: file(relativePath: { eq: "Tools/06 Corte.jpg" }) {
      ...tools
    }
    allFile(filter: {relativeDirectory: {eq: "Tools/toolsGal"}}) {
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
      <Row className="row">
          <Col className="col-7">
            <Img sizes={{...data.tools1.childImageSharp.fluid}} />
            <small class="form-text text-muted"> <FormattedMessage id="tools.hats" /></small>
          </Col>
          <Col >
            <Img sizes={{...data.tools2.childImageSharp.fluid}}  />
            <small class="form-text text-muted"> <FormattedMessage id="tools.saws" /></small>
          </Col>
        </Row>
        <br></br>
        <h2><strong>
          <FormattedMessage id="tools.placeholder" />
        </strong>
        </h2>
        <p>
          <FormattedMessage id="tools.content1" />
        </p>
        <p>
          <FormattedMessage id="tools.content2" />
        </p>
        <p>
          <FormattedMessage id="tools.content3" />
        </p>
        <p>
          <FormattedMessage id="tools.content4" />
        </p>
        <p>
          <FormattedMessage id="tools.content5" />
        </p>
        <p>
          <FormattedMessage id="tools.content6" />
        </p>
        <p>
          <FormattedMessage id="tools.content7" />
        </p>
        <p>
          <FormattedMessage id="tools.content8" />
        </p>
        <p>
          <FormattedMessage id="tools.content9" /> <a target="_blank"  rel="noopener noreferrer" href="https://mecplant.com.br/produto/porta-iscas/">https://mecplant.com.br/produto/porta-iscas/</a>
        </p>
        <p>
          <FormattedMessage id="tools.content10" />
        </p>

        {/* put photo Gallery here */}
        <Gallery
            customProps
            itemsPerRow={[1,2]} 
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid
            }))}
          />
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
  localeKey: 'tools',
};

export default withLayout(customProps)(ToolsPage);