import React from 'react'
import classes from './SecThree.module.css'
import CardThree from './cardthree/CardThree'
import Bone from '../../../assets/whiteOne.png'
import Btwo from '../../../assets/whiteTwo.png'
import back from '../../../assets/backB.png'

function SecThree() {
  return (
    <div className={classes.secThree}>
        <div className="container">
            <h3 className={classes.title_mini}>Optimize your payments</h3>
            <h1 className={classes.title}>Grow your revenue</h1>

            <div className={classes.box}>
                <CardThree 
                    title = "Beat fraud" 
                    text = "Fraud is a deliberate act (or failure to act) with the intention of obtaining an unauthorized benefit, either for oneself or for the institution." 
                    img= {Bone}/>
                <CardThree 
                    title = "Maximize acceptance" 
                    text = "by using deception or false suggestions or suppression of truth or other unethical means, which are believed and relied upon by." 
                    img= {back}/>
            </div>
        </div>
    </div>
  )
}

export default SecThree