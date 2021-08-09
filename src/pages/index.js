import * as React from "react"

import useRooms from "../hooks/useRooms"

import { Title, RoomList } from "../components/home/theme/index-theme"
import Layout from "../components/layout/Layout"
import HomeImage from "../components/home/HomeImage"
import HomeContent from "../components/home/HomeContent"
import RoomsPreview from "../components/home/RoomsPreview"

const IndexPage = () => {
  const rooms = useRooms()

  return (
    <Layout>
      <HomeImage />
      <HomeContent />

      <Title>Nuestras Habitaciones</Title>

      <RoomList>
        {rooms.map((room) => (
          <RoomsPreview key={room.id} room={room} />
        ))}
      </RoomList>
    </Layout>
  )
}

export default IndexPage
