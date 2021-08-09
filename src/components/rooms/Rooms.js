import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Container } from "./theme/Rooms-theme"
import Layout from "../layout/Layout"

export const query = graphql`
  query ($slug: String!) {
    allDatoCmsRoom(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default function Rooms({ data }) {
  const allData = data.allDatoCmsRoom.nodes[0]
  const { title, content, image } = allData
  const imagePath = getImage(image)

  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        <p>{content}</p>
        <GatsbyImage image={imagePath} alt="habitación" />
      </Container>
    </Layout>
  )
}

Rooms.propTypes = {
  data: PropTypes.object,
}
