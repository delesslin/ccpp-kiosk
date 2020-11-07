import { useHistory, useLocation } from 'react-router'
// refactor to hook

const currentIndex = (location) => {
  const parts = location.pathname.split('/')
  const indexStr = parts.pop()
  return parseInt(indexStr, 10)
}

const url = (baseURL, location, x) => {
  const index = currentIndex(location)
  return `${baseURL}/${index + x}`
}

const useDeckNav = (baseURL) => {
  const history = useHistory()
  const location = useLocation()
  const to = (x) => {
    history.push(url(baseURL, location, x))
  }
  const back = () => {
    to(-1)
  }
  const next = () => {
    to(1)
  }

  return { back, next, to }
}

export default useDeckNav
