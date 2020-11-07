import { useContext } from 'react'
import { FcNext } from 'react-icons/fc'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons/lib'
import { ThemeContext, withTheme } from 'styled-components'

const newIcon = (Component) => {
  const Icon = (props) => {
    const theme = useContext(ThemeContext)
    const { color = 'black', size = '2rem' } = props
    return (
      <IconContext.Provider value={{ color: theme.colors[color], size }}>
        <Component />
      </IconContext.Provider>
    )
  }
  return Icon
}
export const NextIcon = withTheme(newIcon(IoIosArrowForward))
export const BackIcon = withTheme(newIcon(IoIosArrowBack))
