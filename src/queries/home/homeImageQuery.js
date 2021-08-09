import { graphql, useStaticQuery } from "gatsby"

export default function homeImageQuery() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "homepage.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2000
            quality: 50
            webpOptions: { quality: 70 }
          )
        }
      }
    }
  `)
  return image
}
