import React from 'react'
import styled from 'styled-components'
import pot_color from 'assets/pot_color.png'
import snake_color from 'assets/snake_color.png'
import head_color from 'assets/head_color.png'
import corn_color from 'assets/corn_color.png'
const StyledDiv = styled.div`
  position: relative;
  grid-column: 1 / 6;
  grid-row: 7 / 12;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${({ size }) => {
    return `
    width: ${size};
    height: ${size};

    `
  }}
`
const Logo = (props) => {
  const { color = true, size = '300px' } = props
  return (
    <StyledDiv {...props} size={size}>
      <img src={pot_color} />
      <img src={snake_color} />
      <img src={head_color} />
      <img src={corn_color} />
    </StyledDiv>
  )
}

export default Logo
