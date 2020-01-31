import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"


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
    hand: file(relativePath: { eq: "Tools/00 Tools.JPG" }) {
      ...tools
    }
    rocado: file(relativePath: { eq: "Tools/01 rocado.jpg" }) {
      ...tools
    }
    cavando: file(relativePath: { eq: "Tools/02 Cavando.jpg" }) {
      ...tools
    }
    movendo: file(relativePath: { eq: "Tools/03 Movendo.jpg" }) {
      ...tools
    }
    pump1: file(relativePath: { eq: "Tools/04 Pump.JPG" }) {
      ...tools
    }
    pump2: file(relativePath: { eq: "Tools/05 Pump.JPG" }) {
      ...tools
    }
    file: file(relativePath: { eq: "Tools/08 File.JPG" }) {
      ...tools
    }
    greaser: file(relativePath: { eq: "Tools/09 Greaser.JPG" }) {
      ...tools
    }
    swiss: file(relativePath: { eq: "Tools/10 Swiss Knife.jpg" }) {
      ...tools
    }
    abafador: file(relativePath: { eq: "Tools/14 Abafador.jpg" }) {
      ...tools
    }
    rake: file(relativePath: { eq: "Tools/15 Rakehoe.jpg" }) {
      ...tools
    }
    mec1: file(relativePath: { eq: "Tools/Mec-Plant 01 .JPG" }) {
      ...tools
    }
    mec2: file(relativePath: { eq: "Tools/Mec-Plant 02.JPG" }) {
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
            <Img sizes={{ ...data.tools1.childImageSharp.fluid }} />
            <small class="form-text text-muted"> <FormattedMessage id="tools.hats" /></small>
          </Col>
          <Col >
            <Img sizes={{ ...data.tools2.childImageSharp.fluid }} />
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
          <FormattedMessage id="tools.content9" /> <a target="_blank" rel="noopener noreferrer" href="https://mecplant.com.br/produto/porta-iscas/">https://mecplant.com.br/produto/porta-iscas/</a>
        </p>
        <p>
          <FormattedMessage id="tools.content10" />
        </p>

        <Row>
          <div class="col d-flex">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.hand.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.hand" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.cavando.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.cavando" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.movendo.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.movendo" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.rocado.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.rocado" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.tools2.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.saws" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.tools1.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.hats" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.pump1.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.pump" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.pump2.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.pump" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.file.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.file" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.greaser.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.greaser" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.swiss.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.swiss" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.abafador.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.abafador" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.rake.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.rakehoe" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.mec1.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.mec1" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.mec2.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="tools.mec2" />
              </div>
            </div>
          </div>
        </Row>
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