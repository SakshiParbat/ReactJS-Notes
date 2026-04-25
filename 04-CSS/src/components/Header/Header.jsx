import React from 'react'
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
     <h3 className={style.logo}>Sakshi Parbat</h3> 
     <button className={style.btn}>Login</button>
    </div>
  )
}

export default Header
