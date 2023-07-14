import classes from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import React from 'react'

const Sidebar = () => {
  return (
<nav>
  <div className={classes.item}>
    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
  </div>
  <div><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></div>
  <div><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></div>
  <div><a href="#" className={classes.item}>News</a></div>
  <div><a href="#" className={classes.item}>Music</a></div>
  <div><a href="#" className={classes.item}>Settings</a></div>
</nav>
)
}

export default Sidebar;
