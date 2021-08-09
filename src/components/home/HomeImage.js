import React from "react"
import { getImage } from "gatsby-plugin-image"

import homeImageQuery from "../../queries/home/homeImageQuery"

import { Image, Text } from "./theme/HomeImage-theme"

export default function HomeImage() {
  const image = homeImageQuery()
  const imagePath = getImage(image)

  return (
    <Image image={imagePath}>
      <Text>
        <h1>Bienvenido al Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </Text>
    </Image>
  )
}
