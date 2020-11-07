import React from 'react'
import styled from 'styled-components'
import pot from 'assets/pot_white.png'
import snake from 'assets/snake_white.png'
import head from 'assets/head_white.png'
import corn from 'assets/corn_white.png'
import pot_color from 'assets/pot_color.png'
import snake_color from 'assets/snake_color.png'
import head_color from 'assets/head_color.png'
import corn_color from 'assets/corn_color.png'

import { useHistory } from 'react-router'

import { useSpring, animated } from 'react-spring'

const LogoDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'pot snake' 'head corn';
  grid-gap: 15px;
  place-items: center;
`
const Image = styled.div`
  width: 300px;
  height: 300px;
  transition: all 0.3s;
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
`
const LogoPiece = styled.div`
  grid-area: ${({ piecePlace }) => piecePlace};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  grid-auto-flow: columns;
  place-items: stretch;
  &:hover {
    cursor: pointer;

    > * {
      box-shadow: 2px 2px 1px #555;
    }
  }
`

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.5rem;
  width: 100%;
  transition: all 0.2s;
  border-radius: 7px;
  padding: 5px;

  ${({ theme, waiting = false }) => {
    return waiting
      ? `
  visibility: hidden;
  opacity: 0;
  bottom: 0px;
  height: 0px;
  `
      : `
  visibility: visible;
  display: grid;
  opacity: 1;
  height: 45px;
  `
  }}
`
const Button = (props) => {
  const { onClick = () => console.log('clicked'), to = '' } = props
  const history = useHistory()
  const handleClick = () => {
    onClick()
    if (to.length > 0) {
      history.push(to)
    }
  }
  return (
    <StyledButton {...props} onClick={handleClick}>
      {props.children}
    </StyledButton>
  )
}

const Piece = ({
  imgSrc,
  buttonTop = true,
  children,
  color = '',
  waiting,
  piecePlace,
  to,
}) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  const AnimatedLogoPiece = animated(LogoPiece)
  const history = useHistory()
  const handleClick = () => {
    console.log('CLICk')
    if (to.length > 0) {
      history.push(to)
    }
  }
  return (
    <AnimatedLogoPiece
      piecePlace={piecePlace}
      style={props}
      onClick={handleClick}
    >
      {buttonTop ? (
        <>
          <Button color={color} waiting={waiting}>
            {children}
          </Button>
          <Image src={imgSrc} />
        </>
      ) : (
        <>
          <Image src={imgSrc} />
          <Button to={to} color={color} waiting={waiting}>
            {children}
          </Button>
        </>
      )}
    </AnimatedLogoPiece>
  )
}
const Logo = ({ waiting }) => {
  return (
    <LogoDiv>
      <Piece
        imgSrc={waiting ? pot : pot_color}
        waiting={waiting}
        color='red'
        buttonTop={true}
        piecePlace='pot'
        to='/about'
      >
        ABOUT
      </Piece>
      <Piece
        imgSrc={waiting ? snake : snake_color}
        waiting={waiting}
        color='blue'
        buttonTop={true}
        piecePlace='snake'
        to='/tour'
      >
        TOUR
      </Piece>
      <Piece
        imgSrc={waiting ? head : head_color}
        waiting={waiting}
        color='yellow'
        buttonTop={false}
        piecePlace='head'
        to='/history'
      >
        History
      </Piece>
      <Piece
        imgSrc={waiting ? corn : corn_color}
        waiting={waiting}
        color='teal'
        buttonTop={false}
        piecePlace='corn'
        to='/contact'
      >
        somethign else
      </Piece>
    </LogoDiv>
  )
}

export default Logo
