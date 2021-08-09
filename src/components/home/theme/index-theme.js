import styled from "styled-components"

export const Title = styled.h2`
  text-align: center;
  margin-top: 5rem;
  font-size: 3 rem;
`

export const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`
