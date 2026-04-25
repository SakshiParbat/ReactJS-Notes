import { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {
    const [theme] = useContext(ThemeDataContext )
  return (
    <div className={theme}>
      <h2>Sakshi</h2>
      <Navbar2 />
    </div>
  )
}

export default Navbar
