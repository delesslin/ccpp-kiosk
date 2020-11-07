import Image from 'Components/Image'
import Slide from 'Components/Slide'
import useAnime, { FROM_LEFT, FROM_RIGHT, FROM_TOP } from 'hooks/useAnime'
import React from 'react'
import styled from 'styled-components'
import turtle from 'assets/turtle.JPG'
import pot_white from 'assets/pot_white.png'
import snake_white from 'assets/snake_white.png'
import head_white from 'assets/head_white.png'
import corn_white from 'assets/corn_white.png'
import { NextIcon } from 'Components'
import { BackIcon } from 'Components/Atoms'

const StyledImage = styled(Image)`
  grid-column: 2 / 12;
  grid-row: 1 / 13;
`
const Bar = styled.div`
  position: relative;
  z-index: 5;
  display: grid;
  grid-gap: 40px;
  padding: 10px 20px 10px 10px;
  grid-template-rows: 1fr;
  place-items: center;
  box-shadow: 2px 2px 1px #222;
  &:nth-child(odd) {
    grid-column: 1 / 8;
    border-radius: 5px 50px 50px 5px;

    grid-template-columns: 70px 1fr auto;
    grid-template-areas: 'icon text button';
  }
  &:nth-child(even) {
    grid-column: 5 / 13;
    border-radius: 50px 5px 5px 50px;

    grid-template-columns: auto 1fr 70px;
    grid-template-areas: 'button text icon';
  }
  &:nth-child(1) {
    grid-row: 2 / 3;
    background-color: ${({ theme }) => theme.colors.red};
  }
  &:nth-child(2) {
    grid-row: 4 / 5;
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &:nth-child(3) {
    grid-row: 6 / 7;
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  &:nth-child(4) {
    grid-row: 8 / 9;
    background-color: ${({ theme }) => theme.colors.teal};
  }
`
const BarImg = styled(Image)`
  grid-area: icon;
  width: 75px;
  height: 75px;

  border-radius: 5px;
  box-shadow: none;
`
const BarText = styled.div`
  grid-area: text;
  font-family: ${({ theme }) => theme.fonts.lato};
  font-size: 1.3rem;
  line-height: 1.75rem;
  text-align: center;
`
const Em = styled.span`
  color: ${({ theme, clr = 'red' }) => theme.colors[clr]};
  padding: 3px 5px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 5px;
  border-radius: 2px;
`
const BarButton = styled.button`
  grid-area: button;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 2px 2px 1px #222;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  // display: grid;
  // place-items: center;
`
const FourPillar = () => {
  const AnimatedImage = useAnime(StyledImage, FROM_TOP)
  const LeftBar = useAnime(Bar, FROM_LEFT)
  const RightBar = useAnime(Bar, FROM_RIGHT)
  return (
    <Slide>
      <LeftBar>
        <BarImg imgSrc={pot_white} />{' '}
        <BarText>
          We <Em>PRESERVE</Em> our culture by protecting artifacts, stories, and
          records in our Tribal Archives.
        </BarText>
        <BarButton>
          <NextIcon />
        </BarButton>
      </LeftBar>
      <RightBar>
        <BarImg imgSrc={snake_white} />{' '}
        <BarText>
          We <Em clr='blue'>PROTECT</Em> our history through our Tribal Historic
          Preservation Office (THPO).
        </BarText>
        <BarButton>
          <BackIcon />
        </BarButton>
      </RightBar>
      <LeftBar>
        <BarImg imgSrc={head_white} />{' '}
        <BarText>
          We <Em clr='yellow'>PROMOTE</Em> our rich cultural heritage through
          public educational materials and programs.
        </BarText>
        <BarButton>
          <NextIcon />
        </BarButton>
      </LeftBar>
      <RightBar>
        <BarImg imgSrc={corn_white} />{' '}
        <BarText>
          We <Em clr='teal'>MAINTAIN</Em> our culture by teaching cultural
          classes and skills to our community
        </BarText>
        <BarButton>
          <BackIcon />
        </BarButton>
      </RightBar>
      <AnimatedImage imgSrc={turtle} />
    </Slide>
  )
}

export default FourPillar
