import React from 'react'
import classes from './SecFour.module.css'

function SecFour() {
  return (
    <div className={classes.secFour}>
        <div className="container">
            <div className={classes.one}>
                <div className={classes.box_title}>
                    <h1 className={classes.title}>Everything you need for <b className={classes.price}>$99 a month</b></h1>
                    <p className={classes.text}>Includes every feature we offer plus unlimited projects and unlimited users</p>
                </div>
                <div className={classes.box_btn}>
                    <button type="button" className={classes.btn}>Get Started Now</button>
                </div>
            </div>

        </div>
        <div className={classes.two}>
                <h1 className={classes.title_two}>Boost your productivity. Start using workflow today.</h1>
                <p className={classes.text_two}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.</p>
                <button className={classes.btn_two}>Sign up for free</button>
        </div>
    </div>
  )
}

export default SecFour