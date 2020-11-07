import styled from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { GrNext } from 'react-icons/gr'
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 1fr;
  grid-template-areas: 'back slide fwd';
  place-items: center;
  background-color: ${({ theme, bg = 'white' }) => theme.colors[bg]};
  color: ${({ theme }) => theme.colors.white};
`
const Back = styled(IoIosArrowBack)`
  grid-area: back;
  display: grid;
  place-items: center;
  color: black;
  font-size: 3rem;
  padding: 15px;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    box-shadow: 2px 2px 2px #000;
    cursor: pointer;
  }
`

const Fwd = styled(GrNext)`
  grid-area: fwd;
  place-items: center;
  color: black;
  font-size: 3rem;
  padding: 15px;
  border-radius: 50%;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    box-shadow: 2px 2px 2px #000;
    cursor: pointer;
  }
`
// const Main = styled.div`
//   grid-area: main;
//   display: grid;
//   place-items: stretch;
//   width: 100%;
//   height: 100%;
// `
const Deck = (props) => {
  const {
    handleBack = () => console.log('back'),
    handleNext = () => console.log('next'),
  } = props
  return (
    <StyledDiv {...props}>
      <Back onClick={handleBack}></Back>
      {props.children}
      <Fwd onClick={handleNext}></Fwd>
    </StyledDiv>
  )
}
export default Deck
