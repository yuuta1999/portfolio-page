import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import classnames from 'classnames'

import Hamburger from './styled/hamburger-menu'

const Header: React.FC = () => {
  const [transparent, setTransparent] = useState(true)

  const handleScroll = () => {
    const currentHeight =
      window.pageYOffset || document.documentElement.scrollTop

    if (currentHeight > 100) {
      setTransparent(false)
    }

    if (currentHeight < 10) {
      setTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <header>
      <Navbar
        fixed="top"
        expand="lg"
        className={classnames({
          'bg-light navbar-shrink': !transparent,
          transparent
        })}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className={classnames({ dark: !transparent })}
          >
            Richard Ng•
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Hamburger />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                className="nav-link__underline"
                as={Link}
                activeClassName="active"
                to="/me"
              >
                Me
              </Nav.Link>
              <Nav.Link
                className="nav-link__underline"
                as={TransitionLink}
                activeClassName="active"
                to="/projects"
              >
                Blogs
              </Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
