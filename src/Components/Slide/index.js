import styled from 'styled-components'
const Slide = styled.div`
  grid-area: slide;
  place-self: stretch;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  height: 100vh;
`

export default Slide
