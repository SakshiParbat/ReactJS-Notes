import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
    console.log(props)
  return (
    <div className='nav'>
      <h2>Sakshi</h2>
      {props.children[0]}
      <Navbar2 theme={props.theme}/>
    </div>
  )
}

export default Navbar
