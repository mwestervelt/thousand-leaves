import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row, Col, Table } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
// import Gallery from '../components/Gallery';



const TreesPage = () => {
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
                <img className="img-fluid" src="https://dummyimage.com/wsxga" />
                <br></br><br></br>
                <h2><strong>
                    <FormattedMessage id="trees.placeholder" />
                </strong>
                </h2>
                <h4 className="text-center"><strong>
                    <FormattedMessage id="trees.content1" />
                </strong>
                </h4>
                <p className="text-center">
                    <FormattedMessage id="trees.content2" />
                    {/* <a target="_blank"  rel="noopener noreferrer" href="trees.content3"><FormattedMessage id="trees.content3" /></a> */}
                    <FormattedMessage id="trees.content3">{link => <a href={link} target="_blank"> <FormattedMessage id="trees.content4" /></a>}</FormattedMessage>
                </p>
                <br></br>

                <p><b> <FormattedMessage id="trees.table1" /></b> </p>
                <Table hover>

                    <thead className="thead-light">
                        <tr>
                            <th><b><FormattedMessage id="trees.col1" /></b></th>
                            <th><b><FormattedMessage id="trees.col2" /></b></th>
                            <th><b><FormattedMessage id="trees.col3" /></b></th>
                            <th>
                                <div align="right"><b><FormattedMessage id="trees.col4" /></b></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>acacia-farnesiana</td>
                            <td>Acacia farnesiana</td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">174 (Vol. 2)</div>
                            </td>
                        </tr>
                        <tr>
                            <td>amendoim-bravo</td>
                            <td>Pterogyne
                    nitens</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">162</div>
                            </td>
                        </tr>
                        <tr>
                            <td>araçá</td>
                            <td>Psidium
                    cattleianum</td>
                            <td>Myrtaceae</td>
                            <td>
                                <div align="right">268</div>
                            </td>
                        </tr>
                        <tr>
                            <td>aroeira</td>
                            <td>Schinus
                    terebinthifolius</td>
                            <td>Anacardiaceae
                    </td>
                            <td>
                                <div align="right">8</div>
                            </td>
                        </tr>
                        <tr>
                            <td>aroeira-salsa</td>
                            <td>Schinus
                    molle</td>
                            <td>Anacardiaceae</td>
                            <td>
                                <div align="right">7</div>
                            </td>
                        </tr>
                        <tr>
                            <td>bougainvílea</td>
                            <td>Bougainvillea
                    glabra</td>
                            <td>Nyctaginaceae
                    </td>
                            <td>
                                <div align="right">270</div>
                            </td>
                        </tr>
                        <tr>
                            <td>bracatinga</td>
                            <td>Mimosa
                    scabrella</td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">180</div>
                            </td>
                        </tr>
                        <tr>
                            <td>canafístula</td>
                            <td>Peltophorumdubium</td>
                            <td>Leg.-Caes.
                    </td>
                            <td>
                                <div align="right">161</div>
                            </td>
                        </tr>
                        <tr>
                            <td>capixingui</td>
                            <td>Croton
                    floribundus</td>
                            <td>Euphorbiaceae</td>
                            <td>
                                <div align="right">99</div>
                            </td>
                        </tr>
                        <tr>
                            <td>cassia
                    grande</td>
                            <td>Cassia
                    grandis</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">150</div>
                            </td>
                        </tr>
                        <tr>
                            <td>cortição</td>
                            <td>Annona
                    cacans</td>
                            <td>Annonaceae
                    </td>
                            <td>
                                <div align="right">13</div>
                            </td>
                        </tr>
                        <tr>
                            <td>embaúba-prateada</td>
                            <td>Cecropia
                    hololeuca</td>
                            <td>Cecropiaceae</td>
                            <td>
                                <div align="right">80</div>
                            </td>
                        </tr>
                        <tr>
                            <td>embaúba-verde</td>
                            <td>Cecropia
                    pachystachya</td>
                            <td>Cecropiaceae</td>
                            <td>
                                <div align="right">81</div>
                            </td>
                        </tr>
                        <tr>
                            <td>fedegoso</td>
                            <td>Senna
                    macranthera</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">165</div>
                            </td>
                        </tr>
                        <tr>
                            <td>fruta-de-pombo</td>
                            <td>Allophyllus
                    edulis</td>
                            <td>Sapindaceae</td>
                            <td>
                                <div align="right">315</div>
                            </td>
                        </tr>
                        <tr>
                            <td>gonçalo
                    alves</td>
                            <td>Astronium
                    graveolens</td>
                            <td>Anarcadeaceae</td>
                            <td>
                                <div align="right">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td>guapuruvú</td>
                            <td>Schizolobium
                    parahyba</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">163</div>
                            </td>
                        </tr>
                        <tr>
                            <td>guatambu</td>
                            <td>Aspidosperma
                    parvifollium</td>
                            <td>Apocynaceae</td>
                            <td>
                                <div align="right">24</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ingazeiro</td>
                            <td>Inga
                    uruguensis</td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">178</div>
                            </td>
                        </tr>
                        <tr>
                            <td>imbiruçú</td>
                            <td>Pseudobombax
                    grandiflorum</td>
                            <td>Bombacaceae</td>
                            <td>
                                <div align="right">67</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pata-de-vaca
                    branca</td>
                            <td>Bauhinia
                    forficata</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">143</div>
                            </td>
                        </tr>
                        <tr>
                            <td>mulungú-do-litoral</td>
                            <td>Erythrina
                    speciosa</td>
                            <td>Leg.-Pap.</td>
                            <td>
                                <div align="right">206</div>
                            </td>
                        </tr>
                        <tr>
                            <td>maria-pobre</td>
                            <td>Dilodendron
                    bipinnatum</td>
                            <td>Sapindaceae</td>
                            <td>
                                <div align="right">318</div>
                            </td>
                        </tr>
                        <tr>
                            <td>orelha-de-macaco</td>
                            <td>Enterolobium
                    contortisiliquum</td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">177</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pau-cigarra</td>
                            <td>Senna
                    multijuga</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">166</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pau-jacaré</td>
                            <td>Piptadenia
                    gonoacantha</td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">184</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pau-formiga</td>
                            <td>Triplaris
                    brasiliana</td>
                            <td>Polygonaceaea</td>
                            <td>
                                <div align="right">294</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pau-pélvora</td>
                            <td>Trema
                    micrantha</td>
                            <td>Ulmaceae</td>
                            <td>
                                <div align="right">340</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pau-viola</td>
                            <td>Cytharexyllum
                    myranthum</td>
                            <td>Verbenaceae</td>
                            <td>
                                <div align="right">343</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pindabuna</td>
                            <td>Xilopia
                    brasiliensis</td>
                            <td>Annonaceae</td>
                            <td>
                                <div align="right">18</div>
                            </td>
                        </tr>
                        <tr>
                            <td>sangue-de-drago</td>
                            <td>Croton
                    urucurana</td>
                            <td>Euphorbiaceae</td>
                            <td>
                                <div align="right">101</div>
                            </td>
                        </tr>
                        <tr>
                            <td>tapiá</td>
                            <td>Alchornea
                    glandulosa</td>
                            <td>Euphorbiaceae</td>
                            <td>
                                <div align="right">97</div>
                            </td>
                        </tr>
                        <tr>
                            <td>tanheiro</td>
                            <td>Alchornea
                    triplinervia</td>
                            <td>Euphorbiaceae</td>
                            <td>
                                <div align="right">98</div>
                            </td>
                        </tr>
                        <tr>
                            <td>urucum</td>
                            <td>Bixa
                    olerana</td>
                            <td>Bixaceae</td>
                            <td>
                                <div align="right">58</div>
                            </td>
                        </tr>
                    </tbody>
                </Table>




                {/* put photo Gallery here */}
                {/* <Gallery
            itemsPerRow={[1,2]} 
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid
            }))}
          /> */}
                <br></br>





                <Link to="/">
                    <FormattedMessage id="page2.Go back to the homepage" />
                </Link>
            </Container>




        </>
    )
};

const customProps = {
    localeKey: 'trees',
};

export default withLayout(customProps)(TreesPage);