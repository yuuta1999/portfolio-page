import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

import Github from '../../assets/SVG/github-logo.svg'
import Twitter from '../../assets/SVG/twitter-logo.svg'
import LinkedIn from '../../assets/SVG/linkedin-logo.svg'

interface CardProfileProps {
  wide: boolean
  content?: string
}

const CardProfile: React.FC<CardProfileProps> = ({
  wide,
  content = ''
}: CardProfileProps) => {
  return (
    <>
      {wide ? (
        <Card className="card-profile shadow mt--300">
          <div className="px-4">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require('../../images/avatar.jpg')}
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <div className="mt-5 py-5 text-center">
              <Row className="justify-content-center">
                <Col lg="9">
                  <p style={{ fontSize: '0.75rem' }}>
                    <span className="font-weight-bold">Richard Nguyen</span>, 20
                  </p>
                </Col>
              </Row>
              <Row className="px-3 justify-content-md-center">
                <Col className="mx-auto">
                  <a
                    rel="noopener noreferrer"
                    id="github-btn"
                    href="https://github.com/yuuta1999"
                    target="_blank"
                  >
                    <Github width={20} alt="See me on Github" />
                  </a>
                </Col>
                <Col className="mx-auto">
                  <a
                    rel="noopener noreferrer"
                    id="twitter-btn"
                    href="https://twitter.com/Richard86159584"
                    target="_blank"
                  >
                    <Twitter width={20} />
                  </a>
                </Col>
                <Col className="mx-auto">
                  <a
                    rel="noopener noreferrer"
                    id="linkedin-btn"
                    href="https://www.linkedin.com/in/richard-nguyen-8a6168192/"
                    target="_blank"
                  >
                    <LinkedIn width={20} />
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="card-profile mt--300">
          <div className="px-4">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3">
                <div className="card-profile-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      className="rounded-circle"
                      src={require('../../images/avatar.jpg')}
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <div className="mt-5 py-5 text-center">
              <Row className="justify-content-center">
                <Col lg="9">
                  <p style={{ fontSize: '0.75rem' }}>
                    <span className="font-weight-bold">Richard Nguyen</span>, 20
                  </p>
                </Col>
              </Row>
              <Row className="mx-auto justify-content-sm-center">
                <Col sm={1}>
                  <a
                    rel="noopener noreferrer"
                    id="github"
                    href="https://github.com/yuuta1999"
                    target="_blank"
                  >
                    <Github width={20} alt="See me on Github" />
                  </a>
                </Col>
                <Col sm={1}>
                  <a
                    rel="noopener noreferrer"
                    id="twitter"
                    href="https://twitter.com/Richard86159584"
                    target="_blank"
                  >
                    <Twitter width={20} />
                  </a>
                </Col>
                <Col sm={1}>
                  <a
                    rel="noopener noreferrer"
                    id="linkedin"
                    href="https://www.linkedin.com/in/richard-nguyen-8a6168192/"
                    target="_blank"
                  >
                    <LinkedIn width={20} />
                  </a>
                </Col>
              </Row>
              <div className="text-justify mt-5 py-3 border-top ">
                {content}
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}

export default CardProfile
