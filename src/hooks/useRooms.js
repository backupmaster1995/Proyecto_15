import { graphql, useStaticQuery } from "gatsby"

export default function useRooms() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes {
          title
          id
          slug
          content
          image {
            gatsbyImageData(width: 1200)
          }
        }
      }
    }
  `)
  return data.allDatoCmsRoom.nodes
}
