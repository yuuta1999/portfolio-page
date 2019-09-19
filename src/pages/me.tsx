import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import SEO from '../components/seo'
import Img from '../components/image'
import Typer from '../components/typer'

const About: React.FC = () => {
  return (
    <>
      <SEO title="About me" />
      <div className="position-relarive">
        <section className="section section-md section-img">
          <Img />
          <Container className="d-flex align-items-center py-lg">
            <Col className="px-0">
              <Row className="align-items-center justify-content-center">
                <Col lg={8} className="text-center">
                  <Typer
                    className="image-font"
                    dataText={['Me, Myself and I']}
                    dataTitle={['Everything about myself']}
                  />
                </Col>
              </Row>
            </Col>
          </Container>
        </section>
      </div>
      <div id="section-main" className="section-main section-scroll">
        <div id="me" className="section">
          <Container>
            <div className="title">About me</div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default About
