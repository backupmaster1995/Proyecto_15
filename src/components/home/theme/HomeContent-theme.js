import styled from "styled-components"

export const Title = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`

export const Text = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`
