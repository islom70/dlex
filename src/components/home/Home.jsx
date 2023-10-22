import React from 'react'
import classes from '../home/Home.module.css'
import SecOne from './secone/SecOne'
import SecTwo from './sectwo/SecTwo'
import SecThree from './secthree/SecThree'
import SecFour from './secfour/SecFour'

function Home() {
  return (
    <div>
      <SecOne/>
      <SecTwo/>
      <SecThree/>
      <SecFour/>
    </div>
  )
}

export default Home