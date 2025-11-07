import About from './About'
import './App.css'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './Services'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/services' element={<Services />}/>
      </Routes>
    </>
  )
}

export default App
