import React from 'react'
import classes from './CardTwo.module.css'


function CardTwo(props) {
  return (
    <div className={classes.card}>
        <img src={props.img} alt="" className={classes.pic} />
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.text}>{props.text}</p>
    </div>
  )
}

export default CardTwo