import { graphql, useStaticQuery } from "gatsby"

export default function aboutContentQuery() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "about" } }) {
        nodes {
          title
          content
          image {
            gatsbyImageData(width: 600)
          }
        }
      }
    }
  `)
  return data.allDatoCmsPage.nodes[0]
}
