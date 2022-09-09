import classes from './Header.module.css';
import React from 'react'

const Header = () => {
  return (
    <header>
    <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"></img>

      <span className={classes.title}>I'm Social Network title</span>
    </header>

  )
}

export default Header;
