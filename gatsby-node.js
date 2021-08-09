exports.createPages = async ({ graphql, reporter, actions }) => {
  const result = await graphql(`
    query {
      allDatoCmsRoom {
        nodes {
          slug
        }
      }
    }
  `)

  /* Errors */
  if (result.errors) {
    reporter.panic("No hubo resultados ", result.errors)
  }

  /* Query Success */
  const rooms = result.data.allDatoCmsRoom.nodes
  rooms.forEach((room) => {
    actions.createPage({
      path: room.slug,
      component: require.resolve("./src/components/rooms/Rooms.js"),
      context: {
        slug: room.slug,
      },
    })
  })
}
