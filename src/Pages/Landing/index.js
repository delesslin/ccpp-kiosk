import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: stretch;
  transition: all 0.2s;
  background-color: ${({ theme, waiting }) =>
    waiting ? theme.colors.yellow : '#fff'};
`
const DisplayDiv = styled.div`
  grid-area: 1/1/1/2;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`

const Landing = () => {
  const [waiting, setWaiting] = React.useState(true)

  return (
    <Container waiting={waiting}>
      <DisplayDiv onClick={() => setWaiting(false)}>
        <Logo waiting={waiting}></Logo>
      </DisplayDiv>
    </Container>
  )
}

export default Landing
