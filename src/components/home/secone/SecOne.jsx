import React from 'react'
import classes from './SecOne.module.css'
import pause from '../../../assets/backG.png'

function SecOne() {
  return (
    <div className={classes.secOne}>
        <div className="container">
            <h1 className={classes.title}>Have no fear of perfection, you'll never reach it.</h1>
            <p className={classes.text}>Create interactive user flow diagrams that tell a story.</p>
            <img src={pause} alt="" className={classes.pic} />
        </div>
    </div>
  )
}

export default SecOne