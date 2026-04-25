import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Contact from "./Pages/Contact.jsx"
import Product from "./Pages/Product.jsx"
import { Route, Routes } from "react-router-dom"
import NotFound from "./Pages/NotFound.jsx"
import Men from "./Pages/Men.jsx"
import Women from "./Pages/Women.jsx"
import Kids from "./Pages/Kids.jsx"
import Courses from "./Pages/Courses.jsx"
import CourseDetail from "./Pages/CourseDetail.jsx"
import Navbar2 from "./components/Navbar2.jsx"
const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:courseId' element={<CourseDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App
