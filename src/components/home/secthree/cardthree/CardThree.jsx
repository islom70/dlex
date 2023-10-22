import React from 'react'
import classes from './CardThree.module.css'
import arr from '../../../../assets/row.svg'

function CardThree(props) {
  return (
    <div className={classes.card}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.text}>{props.text}</p>
        <img src={props.img} alt="" className={classes.pic} />

        <div className={classes.row}>
            <div className={classes.rowImg}>
                <img src={arr} alt="" className={classes.mini_pic} />
            </div>
            <div className={classes.rowText}>
                <p className={classes.lorem}>
                Upgrade your customer experience instantly
                </p>
            </div>
        </div>
        <div className={classes.row}>
            <div className={classes.rowImg}>
                <img src={arr} alt="" className={classes.mini_pic} />
            </div>
            <div className={classes.rowText}>
                <p className={classes.lorem}>
                Retain more, happier customers
                </p>
            </div>
        </div>
        <div className={classes.row}>
            <div className={classes.rowImg}>
                <img src={arr} alt="" className={classes.mini_pic} />
            </div>
            <div className={classes.rowText}>
                <p className={classes.lorem}>
                Start with done-for-you account setup
                </p>
            </div>
        </div>
    </div>
  )
}

export default CardThree