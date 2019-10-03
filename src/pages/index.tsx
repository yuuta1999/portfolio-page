import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import SEO from '../components/seo'
import Typer from '../components/typer'
import Img from '../components/image'

const IndexPage: React.FC = () => {
  return (
    <>
      <SEO title="Home" />
      <div className="position-relative">
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
            <div className="title">About me</div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default IndexPage
