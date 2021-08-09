import React from "react"

import { Nav, NavLink } from "./theme/NavBar-theme"

export default function NavBar() {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="current-page">
        Inicio
      </NavLink>

      <NavLink to={"/about"} activeClassName="current-page">
        Nosotros
      </NavLink>
    </Nav>
  )
}
