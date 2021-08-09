import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import aboutContentQuery from "../../queries/about/aboutContentQuery"

import { Title, Text } from "./theme/AboutContent-theme"

export default function AboutContent() {
  const { title, content, image } = aboutContentQuery()
  const imagePath = getImage(image)

  return (
    <>
      <Title>{title}</Title>
      <Text>
        <p>{content}</p>
        <GatsbyImage image={imagePath} alt="Habitacion" />
      </Text>
    </>
  )
}
