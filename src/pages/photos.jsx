import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Container, Row } from 'reactstrap'
import withLayout from '../layout';
import Link from '../components/Link';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"



const PhotosPage = () => {

    const data = useStaticQuery(graphql`
  fragment photos on File {
    childImageSharp {
      fluid(maxHeight: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  query  {
    original: file(relativePath: { eq: "Project photos/01 Original 1996.jpg" }) {
      ...photos
    }
    actual: file(relativePath: { eq: "Project photos/02 Actual Vista 2016.jpg" }) {
      ...photos
    }
    baixada1: file(relativePath: { eq: "Project photos/03 Baixada 1996.jpg" }) {
      ...photos
    }
    baixada2: file(relativePath: { eq: "Project photos/04 Baixada 2016.jpg" }) {
      ...photos
    }
    vista1: file(relativePath: { eq: "Project photos/05  Vista W 1996.jpg" }) {
      ...photos
    }
    vista2: file(relativePath: { eq: "Project photos/06 Vista W 2016.jpg" }) {
      ...photos
    }
    br7: file(relativePath: { eq: "Project photos/07 BR040W 2000.jpg" }) {
      ...photos
    }
    br8: file(relativePath: { eq: "Project photos/08 BR040W 2005.jpg" }) {
      ...photos
    }
    br9: file(relativePath: { eq: "Project photos/09 BR040W 2012.jpg" }) {
      ...photos
    }
    br10: file(relativePath: { eq: "Project photos/10 BR040W 2016.jpg" }) {
      ...photos
    }
    br11: file(relativePath: { eq: "Project photos/11 BR040E 2001.jpg" }) {
      ...photos
    }
    br12: file(relativePath: { eq: "Project photos/12 BR040E 2008.jpg" }) {
        ...photos
    }
    br13: file(relativePath: { eq: "Project photos/13 BR040E 2012.jpg" }) {
        ...photos
    }
    br14: file(relativePath: { eq: "Project photos/14 BR040E 2016.jpg" }) {
        ...photos
    }
    situation15: file(relativePath: { eq: "Project photos/15 Situation 1996.jpg" }) {
        ...photos
    }
    situation16: file(relativePath: { eq: "Project photos/16 Situation 2016.jpg" }) {
        ...photos
    }
    aerial17: file(relativePath: { eq: "Project photos/17 Aerial 1996.jpg" }) {
        ...photos
    }
    aerial18: file(relativePath: { eq: "Project photos/18 Aerial 2016.jpg" }) {
        ...photos
    }
    baixada19: file(relativePath: { eq: "Project photos/19 Baixada '16.JPG" }) {
        ...photos
    }
    p20: file(relativePath: { eq: "Project photos/20 PCkm72.5 '16.jpg" }) {
        ...photos
    }
    mata21: file(relativePath: { eq: "Project photos/21 Na Mata '16.jpg" }) {
        ...photos
    }
    alto22: file(relativePath: { eq: "Project photos/22 Alto T '16.jpg" }) {
        ...photos
    }
    down23: file(relativePath: { eq: "Project photos/23 Down '16.jpg" }) {
        ...photos
    }
    down24: file(relativePath: { eq: "Project photos/24 Down '16.jpg" }) {
        ...photos
    }
    km25: file(relativePath: { eq: "Project photos/25 km71.2 '16.jpg" }) {
        ...photos
    }
    pb26: file(relativePath: { eq: "Project photos/26 PBlm71.1 09.jpg" }) {
        ...photos
    }
    vista27: file(relativePath: { eq: "Project photos/27 Vista queimada '96jpg.jpg" }) {
        ...photos
    }
    vista28: file(relativePath: { eq: "Project photos/28 Vista Haras.jpg" }) {
        ...photos
    }
    vista29: file(relativePath: { eq: "Project photos/29 1996 300.jpg" }) {
        ...photos
    }
    vista30: file(relativePath: { eq: "Project photos/30 Vista do haras '16.jpg" }) {
        ...photos
    }
    vista31: file(relativePath: { eq: "Project photos/31 Vista Casari '16.jpg" }) {
        ...photos
    }
    vista32: file(relativePath: { eq: "Project photos/32 Vista Pedra '16.jpg" }) {
        ...photos
    }
    vista33: file(relativePath: { eq: "Project photos/33 Vista Talude 01.jpg" }) {
        ...photos
    }
  }
  `)

    return (
        <>
            <br></br>
            <Container>
                <br></br>
                <h2><strong>
                    <FormattedMessage id="photos.placeholder" />
                </strong>
                </h2>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card h-100 border-0">
                            <Img sizes={{ ...data.original.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.original" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.actual.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.actual" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card h-100 border-0">
                            <Img sizes={{ ...data.baixada1.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.baixada1" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card h-100 border-0">
                            <Img sizes={{ ...data.baixada2.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.baixada2" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card h-100 border-0">
                            <Img sizes={{ ...data.vista1.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista1" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista2.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista2" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card h-100 border-0">
                            <Img sizes={{ ...data.br7.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br7" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br8.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br8" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br9.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br9" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br10.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br10" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br11.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br11" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br12.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br12" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br13.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br13" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.br14.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.br14" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.situation15.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.situation15" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.situation16.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.situation16" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.aerial17.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.aerial17" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.aerial18.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.aerial18" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.baixada19.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.baixada19" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.p20.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.p20" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.mata21.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.mata21" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.alto22.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.alto22" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.down23.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.down23" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.down24.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.down24" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.km25.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.km25" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.pb26.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.pb26" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista27.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista27" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista28.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista28" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista29.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista29" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista30.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista30" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista31.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista31" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista32.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista32" />
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div class="py-4 col-lg">
                        <div class="card flex-fill border-0 h-100">
                            <Img sizes={{ ...data.vista33.childImageSharp.fluid }} className="card-img-top" />
                            <div class="card-footer">
                                <FormattedMessage id="photos.vista33" />
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
    localeKey: 'photos',
};

export default withLayout(customProps)(PhotosPage);