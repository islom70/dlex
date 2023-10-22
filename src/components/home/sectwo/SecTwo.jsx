import React from 'react'
import classes from './SecTwo.module.css'
import CardTwo from './cardtwo/CardTwo'
import one from '../../../assets/picOne.svg'
import two from '../../../assets/picTwo.svg'
import three from '../../../assets/picThree.svg'
import four from '../../../assets/picFour.svg'

function SecTwo() {
  return (
    <div className={classes.secTwo}>
        <div className="container">
            <h3 className={classes.title_mini}>Why dlex</h3>
            <h1 className={classes.title}>Creativity is nothing but the way to solve new problems.</h1>

            <div className={classes.box}>
                <CardTwo 
                    title="UI Design"
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat." 
                    img={one}/>
                <CardTwo 
                    title="UX & Research" 
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat." 
                    img={two}/>
                <CardTwo 
                    title="Fast delivery" 
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat." 
                    img={three}/>
                <CardTwo 
                    title="Customer support" 
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat." 
                    img={four}/>
            </div>
        </div>
    </div>
  )
}

export default SecTwo