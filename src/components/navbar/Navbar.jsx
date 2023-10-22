import React from 'react'
import classes from '../navbar/Navbar.module.css'
import { NavLink } from 'react-router-dom'
import photo from '../../assets/onDark.svg'
function Navbar() {
  return (
    <div className={classes.navbar}>
        <div className="container">
          <nav className={classes.nav}>
              <ul className={classes.item}>
                  <li className={classes.item_list}>
                    <NavLink to="" className={classes.item_link}>
                      <img src={photo} alt="" className={classes.photo} />
                    </NavLink>
                  </li>
                  <li className={classes.item_list}>
                    <NavLink to="" className={classes.item_link}>Product</NavLink>
                  </li>
                  <li className={classes.item_list}>
                    <NavLink to="" className={classes.item_link}>Features</NavLink>
                  </li>
                  <li className={classes.item_list}>
                    <NavLink to="" className={classes.item_link}>Marketplace</NavLink>
                  </li>
                  <li className={classes.item_list}>
                    <NavLink to="" className={classes.item_link}>Company</NavLink>
                  </li>
              </ul>

              <div className={classes.btn_group}>
                  <button type="button" className={classes.btn}>Sign In</button>
                  <button type="button" className={classes.btnTwo}>Sign In</button>
              </div>
          </nav>
          
        </div>
    </div>
  )
}

export default Navbar