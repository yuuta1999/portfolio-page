import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Image: React.FC = () => {
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

  return (
    <Img
      fluid={data.placeHolderImage.childImageSharp.fluid}
      style={{ position: 'absolute', height: '90vh' }}
    />
  )
}

export default Image
