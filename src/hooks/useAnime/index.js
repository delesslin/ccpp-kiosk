import { FADE_IN } from 'hooks/useAnime/springs'
import React from 'react'
import { animated, useSpring } from 'react-spring'
export * from './springs'

const useAnime = (Component, options = FADE_IN) => {
  const springProps = useSpring(options)
  const AnimatedComponent = animated(Component)

  const AnimeComponent = (props) => (
    <AnimatedComponent {...props} style={springProps}>
      {props.children}
    </AnimatedComponent>
  )

  return AnimeComponent
}

export default useAnime
