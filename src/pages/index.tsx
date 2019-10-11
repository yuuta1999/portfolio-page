import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Card
} from 'react-bootstrap'
import { Fade } from 'react-reveal'

import SEO from '../components/seo'
import Typer from '../components/typer'
import Img from '../components/image'
import CardProfile from '../components/styled/card'

const IndexPage: React.FC = () => {
  const [height, setHeight] = React.useState<number>(0)
  const [wide, setWide] = React.useState<boolean>(true)

  const handleWide = () => {
    setWide(window.innerWidth > 768)
  }

  React.useEffect(() => {
    handleWide()
  })

  const handleHeight = () => {
    setHeight(window.pageYOffset || document.documentElement.scrollTop)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleHeight)

    return () => {
      window.removeEventListener('scroll', handleHeight)
    }
  })

  return (
    <>
      <SEO title="Home" />
      <div
        className="position-relative"
        style={{
          transform: wide ? `translate3d(0, ${height * 0.3}px, 0)` : 'none'
        }}
      >
        <section className="section section-md section-img">
          <Img />
          <Container className="d-flex align-items-center py-lg">
            <Col className="px-0">
              <Row className="align-items-center justify-content-center">
                <Col lg={8} className="text-center">
                  <Typer
                    className="image-font"
                    dataText={["Hi, I'm Richard."]}
                    dataTitle={['I wrote about myself in this site']}
                  />
                </Col>
              </Row>
            </Col>
          </Container>
        </section>
      </div>
      <section id="section-main" className="section-main section-scroll">
        <div id="me" className="section">
          <Fade bottom>
            <Container>
              {wide ? (
                <React.Fragment>
                  <Row>
                    <Col sm={9}>
                      <h3 className="font-weight-bold title">Who I am</h3>
                      <p className="text-justify description">
                        I was never the best at classes or schools. I&#39;m not
                        a smart guy who can solve a problem immediately. I&#39;m
                        just a guy with a high curiosity about internet,
                        computers, webs and tons of tech things. I taught myself
                        most of everything from the Internet, from learning,
                        solving problems, developing, building, to deploying.
                        <Link to="/me"> Know more about me &gt;&gt;</Link>
                      </p>
                    </Col>
                    <Col>
                      <CardProfile wide />
                    </Col>
                  </Row>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Row>
                    <Col>
                      <CardProfile
                        wide={false}
                        content="I was never the best at classes or schools. I&#39;m not
                        a smart guy who can solve a problem immediately. I&#39;m
                        just a guy with a high curiosity about internet,
                        computers, webs and tons of tech things. I taught myself
                        most of everything from the Internet, from learning,
                        solving problems, developing, building, to deploying."
                      />
                    </Col>
                  </Row>
                </React.Fragment>
              )}
            </Container>
          </Fade>
        </div>
        <div id="skills" className="section">
          <Container>
            {wide ? (
              <>
                <Fade bottom>
                  <Row>
                    <Col>
                      <h3 className="font-weight-bold title">What I know</h3>
                    </Col>
                  </Row>
                </Fade>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Fade bottom>
                      <Row className="row-grid">
                        <Col lg="3">
                          <Card className="shadow border-0">
                            <Card.Body className="py-5">
                              <h6 className="font-weight-bold text-uppercase">
                                Languages
                              </h6>
                              <ListGroup>
                                <ListGroupItem className="border-0 pb-0">
                                  Python/Java
                                </ListGroupItem>
                                <ListGroupItem className="border-0 pb-0">
                                  Javascript (ES6)
                                </ListGroupItem>
                                <ListGroupItem className="border-0 pb-0">
                                  HTML/CSS/SCSS
                                </ListGroupItem>
                                <ListGroupItem className="border-0 pb-0">
                                  Typescript
                                </ListGroupItem>
                              </ListGroup>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col lg="3">
                          <Fade bottom wait={1000}>
                            <Card className="shadow border-0">
                              <Card.Body className="py-5">
                                <h6 className="font-weight-bold text-uppercase">
                                  Frameworks
                                </h6>
                                <ListGroup>
                                  <ListGroupItem className="border-0 pb-0">
                                    Flask/Django
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    React/Vue
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    Bootstrap/Material
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    Express/Spring
                                  </ListGroupItem>
                                </ListGroup>
                              </Card.Body>
                            </Card>
                          </Fade>
                        </Col>
                        <Col lg="3">
                          <Fade bottom wait={1500}>
                            <Card className="card-lift--hover shadow border-0">
                              <Card.Body className="py-5">
                                <h6 className="font-weight-bold text-uppercase">
                                  Tools
                                </h6>
                                <ListGroup>
                                  <ListGroupItem className="border-0 pb-0">
                                    Git (Github)
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    VS Code
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    Hyper
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    Windows/Linux
                                  </ListGroupItem>
                                </ListGroup>
                              </Card.Body>
                            </Card>
                          </Fade>
                        </Col>
                        <Col lg="3">
                          <Fade bottom wait={2000}>
                            <Card className="card-lift--hover shadow border-0">
                              <Card.Body className="py-5">
                                <h6 className="font-weight-bold text-uppercase">
                                  Database
                                </h6>
                                <ListGroup>
                                  <ListGroupItem className="border-0 pb-0">
                                    PostgresQL
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    MongoDB
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    Redis
                                  </ListGroupItem>
                                  <ListGroupItem className="border-0 pb-0">
                                    Cassandra
                                  </ListGroupItem>
                                </ListGroup>
                              </Card.Body>
                            </Card>
                          </Fade>
                        </Col>
                      </Row>
                    </Fade>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row>
                  <Col>
                    <h3 className="font-weight-bold title">What I know</h3>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <Row className="row-grid">
                      <Col lg="3">
                        <Card className="my-3">
                          <Card.Body className="py-5">
                            <h6 className="font-weight-bold text-uppercase">
                              Languages
                            </h6>
                            <ListGroup>
                              <ListGroupItem className="border-0 pb-0">
                                Python/Java
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Javascript (ES6)
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                HTML/CSS/SCSS
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Typescript
                              </ListGroupItem>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="my-3">
                          <Card.Body className="py-5">
                            <h6 className="font-weight-bold text-uppercase">
                              Frameworks
                            </h6>
                            <ListGroup>
                              <ListGroupItem className="border-0 pb-0">
                                Flask/Django
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                React/Vue
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Bootstrap/Material
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Express/Spring
                              </ListGroupItem>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="my-3">
                          <Card.Body className="py-5">
                            <h6 className="font-weight-bold text-uppercase">
                              Tools
                            </h6>
                            <ListGroup>
                              <ListGroupItem className="border-0 pb-0">
                                Git (Github)
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                VS Code
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Hyper
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Windows/Linux
                              </ListGroupItem>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card className="my-3">
                          <Card.Body className="py-5">
                            <h6 className="font-weight-bold text-uppercase">
                              Database
                            </h6>
                            <ListGroup>
                              <ListGroupItem className="border-0 pb-0">
                                PostgresQL
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                MongoDB
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Redis
                              </ListGroupItem>
                              <ListGroupItem className="border-0 pb-0">
                                Cassandra
                              </ListGroupItem>
                            </ListGroup>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </>
            )}
          </Container>
        </div>
        <div id="project" className="section">
          <Container>
            <Row>
              <Col>
                <h3 className="font-weight-bold title">What I made</h3>
                <p className="text-justify description">
                  They said that study and work must go together
                  <Link to="/project"> Explore more &gt;&gt;</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="blog" className="section">
          <Container>
            <Row>
              <Col sm={9}>
                <h3 className="font-weight-bold title">What I wrote</h3>
                <p className="text-justify description">
                  I share what I know with people
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="text-center font-weight-bold px-3 py-5">
                  Upcoming...
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default IndexPage
