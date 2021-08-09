import React from "react"

import { AppHeader, GoToHome } from "./theme/Header-theme"
import NavBar from "./NavBar"

export default function Header() {
  return (
    <AppHeader>
      <div>
        <GoToHome to="/">
          <h1>Hotel Gatsby</h1>
        </GoToHome>

        <NavBar />
      </div>
    </AppHeader>
  )
}
