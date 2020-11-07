import React from 'react'
import frontImg from 'assets/front.JPG'
import Slide from 'Components/Slide'
import Logo from 'Components/Logo'
import styled from 'styled-components'
import Image from 'Components/Image'
import useAnime, {
  FROM_BOTTOM_LEFT,
  FROM_LEFT,
  FROM_RIGHT,
  FROM_TOP,
} from 'hooks/useAnime'

const Header = styled.div`
  grid-column: 1 / 10;
  grid-row: 3 / 4;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: grid;
  place-items: center;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.dm};
  box-shadow: 2px 2px 1px #000;
  color: ${({ theme }) => theme.colors.navy};
  position: relative;
  padding: 10px;
`
const BgImage = styled(Image)`
  grid-column: 2 / 13;
  grid-row: 2 / 12;
`
const Description = styled.p`
  grid-column: 7 / 12;
  grid-row: 7 / 11;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.navy};
  font-size: 1.5rem;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts.noto};
  box-shadow: 2px 2px 2px #555;
  position: relative;
  justify-self: stretch;
  align-self: start;
`
const Intro = () => {
  const AnimatedHeader = useAnime(Header, FROM_LEFT)
  const AnimatedDescription = useAnime(Description, FROM_RIGHT)
  const AnimatedLogo = useAnime(Logo, FROM_BOTTOM_LEFT)
  const AnimatedImg = useAnime(BgImage, FROM_TOP)
  return (
    <Slide>
      <AnimatedImg imgSrc={frontImg} />
      <AnimatedHeader>Catawba Cultural Preservation Project</AnimatedHeader>
      <AnimatedDescription>
        The Catawba Cultural Preservation Project is a division of Catawba
        Indian Nation and was established in 1989 to "preserve, protect,
        promote, and maintain the rich cultural heritage of the Catawba Indian
        Nation."
      </AnimatedDescription>
      <AnimatedLogo />
    </Slide>
  )
}

export default Intro
