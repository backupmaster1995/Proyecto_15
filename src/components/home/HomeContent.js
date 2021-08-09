import React from "react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import homeImageQuery from "../../queries/home/homeContentQuery"

import { Title, Text } from "./theme/HomeContent-theme"

export default function HomeContent() {
  const { title, content, image } = homeImageQuery()
  const imagepath = getImage(image)

  return (
    <>
      <Title>{title}</Title>
      <Text>
        <p>{content}</p>
        <GatsbyImage image={imagepath} alt="hotel" />
      </Text>
    </>
  )
}
