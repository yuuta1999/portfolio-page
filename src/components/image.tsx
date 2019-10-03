import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Image: React.FC = () => {
  const [height, setHeight] = useState<number>(0)

  const data = useStaticQuery(graphql`
    query {
      placeHolderImage: file(relativePath: { eq: "main.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const handleScroll = () => {
    setHeight(window.pageYOffset || document.documentElement.scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Img
      fluid={data.placeHolderImage.childImageSharp.fluid}
      style={{
        position: 'absolute',
        height: '90vh',
        transform:
          window.innerWidth > 768
            ? `translate3d(0, ${height * -0.4}px, 0)`
            : 'none'
      }}
    />
  )
}

export default Image
