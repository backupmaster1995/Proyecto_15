import { graphql, useStaticQuery } from "gatsby"

export default function homeContentQuery() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            gatsbyImageData(width: 2000)
          }
        }
      }
    }
  `)
  return data.allDatoCmsPage.nodes[0]
}
