import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import Gallery from '../components/Gallery';


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


const PeoplePage = ({ data }) => {
  // console.log(data.allFile.edges);
  // const kids = data.allFile.edges.slice(18, 19)

  return (
    <>
      <br></br>
      <Container>
        <Img fluid={{ ...data.kids.childImageSharp.fluid, aspectRatio: 1.77 }} />
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

        {/* put photo Gallery here */}
        <StaticQuery
        query= {graphql`
        {
          allFile(filter: {relativeDirectory: {eq: "People"}}) {
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
            kids: file(relativePath: { eq: "People/Kids Cleanup 04.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 4000) {
                  ...GatsbyImageSharpFluid
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
  localeKey: 'people',
};

export default withLayout(customProps)(PeoplePage);