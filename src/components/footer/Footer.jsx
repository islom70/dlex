import React from 'react'
import classes from './Footer.module.css'
import blue from '../../assets/onDarkB.svg'
import fb from '../../assets/fb.svg'
import twiter from '../../assets/twiter.svg'
import inst from '../../assets/inst.svg'
import cat from '../../assets/cat.svg'
function Footer() {
  return (
    <div className='container'>
        <footer className={classes.foot}>
            <div className={classes.one}>
              <img src={blue} alt="" className={classes.photo} />
              <p className={classes.text}>Making the world a better place through constructing elegant hierarchies</p>
              <div className={classes.icon_boxs}>
                <img src={fb} alt="" className={classes.face} />
                <img src={twiter} alt="" className={classes.face} />
                <img src={inst} alt="" className={classes.face} />
                <img src={cat} alt="" className={classes.face} />
              </div>
            </div>
            <div className={classes.two}>
                 <h3 className={classes.mini_title}>Solutions</h3>
                 <p className={classes.mini_text}>Marketing</p>
                 <p className={classes.mini_text}>Analytics</p>
                 <p className={classes.mini_text}>Commerce</p>
                 <p className={classes.mini_text}>Insights</p>
            </div>            
            <div className={classes.two}>
                <h3 className={classes.mini_title}>Support</h3>
                <p className={classes.mini_text}>Pricing</p>
                <p className={classes.mini_text}>Documentation</p>
                <p className={classes.mini_text}>Guides</p>
                <p className={classes.mini_text}>API Status</p>
            </div>
            <div className={classes.two}>
                <h3 className={classes.mini_title}>Company</h3>
                <p className={classes.mini_text}>About</p>
                <p className={classes.mini_text}>Blog</p>
                <p className={classes.mini_text}>Jobs</p>
                <p className={classes.mini_text}>Press</p>
                <p className={classes.mini_text}>Partners</p>
            </div>
            <div className={classes.two}>
                <h3 className={classes.mini_title}>Legal</h3>
                <p className={classes.mini_text}>Claim</p>
                <p className={classes.mini_text}>Privacy</p>
                <p className={classes.mini_text}>Terms</p>
            </div>
        </footer>
        <div className={classes.footBox_text}>
          <p className={classes.footer_text}>© 2020 Dlex, Inc. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer