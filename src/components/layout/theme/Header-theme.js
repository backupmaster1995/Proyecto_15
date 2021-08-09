import styled from "styled-components"
import { Link } from "gatsby"

export const AppHeader = styled.header`
  background-color: rgba(44, 62, 80);
  padding: 1rem;

  div {
    max-width: 1200px;
    margin: 0 auto;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const GoToHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
