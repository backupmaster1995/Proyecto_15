import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

export const Container = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;

  div {
    padding: 3rem;

    h3 {
      font-size: 3rem;
    }
  }
`
