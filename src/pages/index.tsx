import React from 'react'
import { Link } from 'gatsby'
import { Container, Col, Row } from 'react-bootstrap'

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
          <Container>
            <Row>
              <Col sm={9}>
                <h3 className="font-weight-bold title">Myself</h3>
                <p className="text-justify description">
                  I was never the best at classes or schools. I&#39;m not a
                  smart guy who can solve a problem immediately. I&#39;m just a
                  guy with a high curiosity about internet, computers, webs and
                  tons of tech things. I taught myself most of everything from
                  the Internet, from learning, solving problems, developing,
                  building, to deploying.
                  <Link to="/me"> Know more about me &gt;&gt;</Link>
                </p>
              </Col>
              <Col>
                <CardProfile />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default IndexPage
