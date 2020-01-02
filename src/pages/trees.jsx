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
                {/* <img className="img-fluid" src="https://dummyimage.com/wsxga" />
                <br></br><br></br> */}
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
                            <td>Pterogyne nitens</td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">162</div>
                            </td>
                        </tr>
                        <tr>
                            <td>araçá</td>
                            <td>Psidium cattleianum</td>
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

                <br></br><br></br>
                <p><b> <FormattedMessage id="trees.table2" /></b> </p>
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
                            <td>angelim-vermelho</td>
                            <td>Dinizia excelsa</td>
                            <td>Leg.-Mim</td>
                            <td>
                                <div align="right">176</div>
                            </td>
                        </tr>
                        <tr>
                            <td>angico-branco</td>
                            <td>Anadenanthera
                    colubrina </td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">172</div>
                            </td>
                        </tr>
                        <tr>
                            <td>angico-vermelho</td>
                            <td>Anadenanthera
                    macrocarpa </td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">174</div>
                            </td>
                        </tr>
                        <tr>
                            <td>araticum</td>
                            <td>Rolinea
                    cericea</td>
                            <td>Annanoaceae</td>
                            <td>
                                <div align="right">32
                      (Vol. 2)</div>
                            </td>
                        </tr>
                        <tr>
                            <td>cabreúva</td>
                            <td>Myrocarpus
                    frondosus</td>
                            <td>Leg.-Pap.</td>
                            <td>
                                <div align="right">219</div>
                            </td>
                        </tr>
                        <tr>
                            <td>carobinha</td>
                            <td>Jacaranda
                    puberula</td>
                            <td>Bignoniaceae</td>
                            <td>
                                <div align="right">41</div>
                            </td>
                        </tr>
                        <tr>
                            <td>cebolão</td>
                            <td>Phytolacca
                    dioica</td>
                            <td>Phytolaccaceae</td>
                            <td>
                                <div align="right">291</div>
                            </td>
                        </tr>
                        <tr>
                            <td>figueira</td>
                            <td>Ficus
                    insipida</td>
                            <td>Moraceae</td>
                            <td>
                                <div align="right">250</div>
                            </td>
                        </tr>
                        <tr>
                            <td>freijó</td>
                            <td>Cordia
                    trichotoma</td>
                            <td>Boraginaceae</td>
                            <td>
                                <div align="right">74</div>
                            </td>
                        </tr>
                        <tr>
                            <td>goiaba</td>
                            <td>Psidium
                    guajava</td>
                            <td>Myrtaceae
                    </td>
                            <td>
                                <div align="right">269</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipô-verde</td>
                            <td>Cybistax
                    antisyphilitica </td>
                            <td>Bignoniaceae</td>
                            <td>
                                <div align="right">36</div>
                            </td>
                        </tr>
                        <tr>
                            <td>jacaranda
                    de Minas</td>
                            <td>Jacaranda
                    cuspidifolia</td>
                            <td>Bignoniaceae</td>
                            <td>
                                <div align="right">38</div>
                            </td>
                        </tr>
                        <tr>
                            <td>manacá-da-serra</td>
                            <td>Tibouchina
                    mutabilis</td>
                            <td>Melastomataceae
                    </td>
                            <td>
                                <div align="right">238</div>
                            </td>
                        </tr>
                        <tr>
                            <td>monjoleiro</td>
                            <td>Acacia
                    polyphilla</td>
                            <td>Leg.-Mim.</td>
                            <td>
                                <div align="right">169</div>
                            </td>
                        </tr>
                        <tr>
                            <td>mulungú-canivete</td>
                            <td>Erythrina
                    falcata</td>
                            <td>Leg.-Pap.</td>
                            <td>
                                <div align="right">204</div>
                            </td>
                        </tr>
                        <tr>
                            <td>oiti</td>
                            <td>Licania
                    tomentosa</td>
                            <td>Chrisobalanaceae</td>
                            <td>
                                <div align="right">85</div>
                            </td>
                        </tr>
                        <tr>
                            <td>paineira-rosa</td>
                            <td>Chorisia
                    speciosa</td>
                            <td>Bombacaceae</td>
                            <td>
                                <div align="right">61</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pente-de-macaco</td>
                            <td>Epeiba
                    tibourbou</td>
                            <td>Tiliaceae</td>
                            <td>
                                <div align="right">335</div>
                            </td>
                        </tr>
                        <tr>
                            <td>quaresmeira</td>
                            <td>Tibouchina
                    granulosa</td>
                            <td>Melastomataceae</td>
                            <td>
                                <div align="right">237</div>
                            </td>
                        </tr>
                        <tr>
                            <td>sabão-de-soldado</td>
                            <td>Sapindus
                    saponaria</td>
                            <td>Sapindaceae
                    </td>
                            <td>
                                <div align="right">321</div>
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
                            <td>pau-pólvora</td>
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

                <br></br><br></br>
                <p><b> <FormattedMessage id="trees.table3" /></b> </p>
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
                            <td>araucaria</td>
                            <td>Araucaria
                    angustifolia</td>
                            <td>Araucariaceae</td>
                            <td>
                                <div align="right">35</div>
                            </td>
                        </tr>
                        <tr>
                            <td>canela-ferrugem</td>
                            <td>Nectandra
                    rigida</td>
                            <td>Lauraceae</td>
                            <td>
                                <div align="right">124</div>
                            </td>
                        </tr>
                        <tr>
                            <td>chuva-de-ouro</td>
                            <td>Cassia
                    ferruginea</td>
                            <td>Leg-Caes.</td>
                            <td>
                                <div align="right">149</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-amarelo</td>
                            <td>Tabebuia
                    chrysotricha </td>
                            <td>Bignoniaceae
                    </td>
                            <td>
                                <div align="right">48</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-amarelo(opa)</td>
                            <td>Tabebuia
                    serratifolia</td>
                            <td>Bignoniaceae
                    </td>
                            <td>
                                <div align="right">54</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-amarelo(tabaco)</td>
                            <td>Tabebuia
                    vellosoi</td>
                            <td>Bignoniaceae</td>
                            <td>
                                <div align="right">56</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-branco</td>
                            <td>Tabebuia
                    roseo-alba</td>
                            <td>Bignoniaceae</td>
                            <td>
                                <div align="right">53</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-rosa</td>
                            <td>Tabebuia-rosea
                    </td>
                            <td>Bignoniaceae
                    </td>
                            <td>
                                <div align="right">ausente</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-
                    roxo</td>
                            <td>Tabebuia
                    avellanedae</td>
                            <td>Bignoniaceae
                    </td>
                            <td>
                                <div align="right">45</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-roxo(preto)</td>
                            <td>Tabebuia
                    eptaphylla</td>
                            <td>Bignoniaceae
                    </td>
                            <td>
                                <div align="right">50</div>
                            </td>
                        </tr>
                        <tr>
                            <td>ipê-roxo(piúna)</td>
                            <td>Tabebuia
                    impetiginosa</td>
                            <td>Bignoniaceae</td>
                            <td>
                                <div align="right">51</div>
                            </td>
                        </tr>
                        <tr>
                            <td>jerivá</td>
                            <td>Syagrus
                    romanzoffiana</td>
                            <td>Palmae
                    </td>
                            <td>
                                <div align="right">289</div>
                            </td>
                        </tr>
                        <tr>
                            <td>mirindiba-rosa</td>
                            <td>Lafoensia
                    glyptocarpa</td>
                            <td>Lythraceae</td>
                            <td>
                                <div align="right">229</div>
                            </td>
                        </tr>
                        <tr>
                            <td>oiti</td>
                            <td>Licania
                    tomentosa</td>
                            <td>Chrysobalanaceae</td>
                            <td>
                                <div align="right">85</div>
                            </td>
                        </tr>
                        <tr>
                            <td>palmito-doce</td>
                            <td>Euterpe
                    edulis</td>
                            <td>Palmae
                    </td>
                            <td>
                                <div align="right">279</div>
                            </td>
                        </tr>
                        <tr>
                            <td>peroba-rosa</td>
                            <td>Aspidosperma
                    polyneuron</td>
                            <td>Apocynaceae</td>
                            <td>
                                <div align="right">25</div>
                            </td>
                        </tr>
                        <tr>
                            <td>pitanga</td>
                            <td>Eugenia
                    uniflora</td>
                            <td>Myrtaceae</td>
                            <td>
                                <div align="right">261</div>
                            </td>
                        </tr>
                        <tr>
                            <td>sibipiruna</td>
                            <td>Caesalpinia
                    peltophoroides </td>
                            <td>Leg.-Caes.</td>
                            <td>
                                <div align="right">148</div>
                            </td>
                        </tr>
                        <tr>
                            <td>sucupira</td>
                            <td>Pterodon
                    emaginatus</td>
                            <td>Leg.-Pap.</td>
                            <td>
                                <div align="right">227</div>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <br></br><br></br>
                <p><b> <FormattedMessage id="trees.table4" /></b> </p>
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
                            <td width="176">cambucá</td>
                            <td width="231">Marlierea
                    edulis</td>
                            <td width="153">Myrtaceae</td>
                            <td width="70">
                                <div align="right">264</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">grumixama</td>
                            <td width="231">Eugenia
                    brasiliensis</td>
                            <td width="153">Myrtaceae
                    </td>
                            <td width="70">
                                <div align="right">257</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">jabuticaba</td>
                            <td width="231">Myrciaria
                    trunciflora</td>
                            <td width="153">Myrtaceae
                    </td>
                            <td width="70">
                                <div align="right">267</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">jatobá</td>
                            <td width="231">Hymenaea
                    courbaril</td>
                            <td width="153">Leg.-Caes.</td>
                            <td width="70">
                                <div align="right">155</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">jequitibá-branco</td>
                            <td width="231">Cariniana
                    estrellensis</td>
                            <td width="153">Lecythidaceae</td>
                            <td width="70">
                                <div align="right">134</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">jequitibá-rosa</td>
                            <td width="231">Cariniana
                    legalis</td>
                            <td width="153">Lecythidaceae</td>
                            <td width="70">
                                <div align="right">135</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">pau-alecrim</td>
                            <td width="231">Holocalix
                    balansae</td>
                            <td width="153">Leg.-Caes.</td>
                            <td width="70">
                                <div align="right">154</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">pau-brasil</td>
                            <td width="231">Caesalpinia
                    echinata</td>
                            <td width="153">Leg.-Caes.</td>
                            <td width="70">
                                <div align="right">145</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">pau-ferro</td>
                            <td width="231">Caesalpinia
                    ferrea </td>
                            <td width="153">Leg.-Caes.</td>
                            <td width="70">
                                <div align="right">147</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">peroba-de-Campos</td>
                            <td width="231">Paratecoma
                    peroba</td>
                            <td width="153">Bignoniaceae
                    </td>
                            <td width="70">
                                <div align="right">42</div>
                            </td>
                        </tr>
                        <tr>
                            <td width="176">sapucaia</td>
                            <td width="231">Lecythis
                    pisonis </td>
                            <td width="153">Lecythidaceae</td>
                            <td width="70">
                                <div align="right">141</div>
                            </td>
                        </tr>
                    </tbody></Table>



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