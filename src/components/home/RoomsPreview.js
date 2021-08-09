import React from "react"
import PropTypes from "prop-types"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { Container, Button } from "./theme/RoomsPreview-theme"

export default function RoomsPreview({ room }) {
  const { title, content, image, slug } = room
  const imagePath = getImage(image)

  return (
    <Container>
      <GatsbyImage image={imagePath} alt="habitación" />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <Button to={slug}>Ver Habitación</Button>
      </div>
    </Container>
  )
}

RoomsPreview.propTypes = {
  room: PropTypes.object,
}
