import Deck from 'Components/Deck'
import useDeckNav from 'hooks/useAnime/useDeckNav'
import FourPillar from 'Pages/About/FourPillar'
import Intro from 'Pages/About/Intro'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

// refactor to hook
const Slides = [Intro, FourPillar]

const About = () => {
  const { next, back } = useDeckNav('/about')

  return (
    <Deck bg='white' handleNext={next} handleBack={back}>
      <Switch>
        {Slides.map((Entry, i) => {
          return (
            <Route key={i} path={`/about/${i}`}>
              <Entry next={next} back={back} />
            </Route>
          )
        })}
        <Redirect to='/about/0'>
          {Slides.reduce((acc, Curr, i) => {
            if (i === 0) {
              return [() => <Curr />]
            }
          }, [])}
        </Redirect>
      </Switch>
    </Deck>
  )
}

export default About
