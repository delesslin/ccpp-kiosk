import styled from 'styled-components'

const Image = styled.div`
  position: relative;
  background: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 1px 1px 1px #222;
`
export default Image
