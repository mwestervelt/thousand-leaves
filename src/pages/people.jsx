import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"


const names = ["Aylton (Juninho) Alves",
  "Baiano (capoteiro)",
  "Tamar Bajgielman",
  "Maria Lúcia Nova da Costa",
  "Diguinho",
  "Leonardo Ciuffo Faver",
  "Ricardo Ganem",
  "Orlando Graeff",
  "Kazumi Hayama",
  "Molly and Philip Jenkins",
  "Renaud Jordão",
  "Paulo Kageyama",
  "Midori Katsumoto",
  "Teachers and Students from Escola Municipal João Kopke",
  "Jan van der Lande", "Thomas Laubisc",
  "Toninho Lima",
  "Anna Karla Machado",
  "Cesar Mascarenhas",
  "Lulú Mascarenhas",
  "The team of EMATER in Petrópolis",
  "The team of  IEF in Petrópolis",
  "Maria do Rosário",
  "Joel Julio da Silva",
  "Luizinho & Sardinha",
  "John Schoellerman",
  "Marcos Taquechel",
  "Denise Tarín",
  "Maria Alice (Cice) da Silva Telles",
  "Tião",
  "Isabella Torquato",
  "Pieter Woudt"]


const PeoplePage = () => {

  const data = useStaticQuery(graphql`
  fragment people on File {
    childImageSharp {
      fluid(maxHeight: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    kids: file(relativePath: { eq: "People/Kids Cleanup 04.jpg" }) {
      ...people
    }
    luis: file(relativePath: { eq: "People/01 Luis Sardinha Chico.jpg" }) {
      ...people
    }
    philip: file(relativePath: { eq: "People/02 Philip Jenkins.jpg" }) {
      ...people
    }
    biceps: file(relativePath: { eq: "People/Biceps.JPG" }) {
      ...people
    }
    chico: file(relativePath: { eq: "People/Chico Jan.jpg" }) {
      ...people
    }
    capa: file(relativePath: { eq: "People/GB Capa.jpg" }) {
      ...people
    }
    miolo: file(relativePath: { eq: "People/GB Miolo.jpg" }) {
      ...people
    }
    j1: file(relativePath: { eq: "People/Jequitiba 01 May 03.jpg" }) {
      ...people
    }
    j2: file(relativePath: { eq: "People/Jequitiba 02 Mar 06.jpg" }) {
      ...people
    }
    j3: file(relativePath: { eq: "People/Jequitiba 03 Nov 11.jpg" }) {
      ...people
    }
    j4: file(relativePath: { eq: "People/Jequitiba 04 Nov 12.JPG" }) {
      ...people
    }
    j5: file(relativePath: { eq: "People/Jequitiba 05 April 16.jpg" }) {
      ...people
    }
    j6: file(relativePath: { eq: "People/Jequitiba 06 Nov 17.jpg" }) {
      ...people
    }
    kids2: file(relativePath: { eq: "People/Kids Cleanup 02.jpg" }) {
      ...people
    }
    kids3: file(relativePath: { eq: "People/Kids Cleanup 03.jpg" }) {
      ...people
    }
    kids1: file(relativePath: { eq: "People/Kids Cleanup 01.jpg" }) {
      ...people
    }
    kids5: file(relativePath: { eq: "People/KIds Planting 05.jpg" }) {
      ...people
    }
    kids6: file(relativePath: { eq: "People/KIds Planting 06.jpg" }) {
      ...people
    }
    kids7: file(relativePath: { eq: "People/KIds Planting 07.jpg" }) {
      ...people
    }
    kids8: file(relativePath: { eq: "People/KIds Planting 08.jpg" }) {
      ...people
    }
    lucia: file(relativePath: { eq: "People/Lucia Nova da Costa.jpg" }) {
      ...people
    }
    mata38: file(relativePath: { eq: "People/Na Mata 38.jpg" }) {
      ...people
    }
    mata39: file(relativePath: { eq: "People/Na Mata 39.jpg" }) {
      ...people
    }
    rocado: file(relativePath: { eq: "People/Rocado.jpg" }) {
      ...people
    }
  }
`)

  return (
    <>
      <br></br>
      <Container>
        <Img fluid={{ ...data.kids.childImageSharp.fluid, aspectRatio: 1.77 }} />
        <small class="form-text text-muted"> <FormattedMessage id="people.kids" /></small>
        <br></br>
        <h2><strong>
          <FormattedMessage id="people.placeholder" />
        </strong>
        </h2>
        <p>
          <FormattedMessage id="people.content1" />
        </p>
        <Row>
          <Col>
            <ul>
              {names.slice(0, 16).map(name => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {names.slice(16).map(name1 => (
                <li key={name1}>{name1}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.luis.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.luis" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.philip.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.philip" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-5">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.biceps.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.biceps" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.chico.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.chico" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-6">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.capa.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.capa" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col d-flex">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.miolo.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.miolo" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.j1.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.j1" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-6">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.j2.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.j2" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.j3.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.j3" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-6">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.j4.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.j4" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.j5.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.j5" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-6">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.j6.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.j6" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col d-flex">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.kids3.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids3" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-6">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.kids1.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids1" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-6">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.kids2.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids2" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-7">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.kids5.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids5" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-5">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.kids8.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids8" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.kids6.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids6" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.kids7.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.kids7" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg-4">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.lucia.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.lucia" />
              </div>
            </div>
          </div>
          <div class="py-4 col-lg-8">
            <div class="card flex-fill border-0 h-100">
              <Img sizes={{ ...data.rocado.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.rocado" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.mata38.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.mata38" />
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div class="py-4 col-lg">
            <div class="card h-100 border-0">
              <Img sizes={{ ...data.mata39.childImageSharp.fluid }} className="card-img-top" />
              <div class="card-footer">
                <FormattedMessage id="people.mata39" />
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
  localeKey: 'people',
};

export default withLayout(customProps)(PeoplePage);