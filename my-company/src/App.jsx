import About from './components/About'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Navbar from './components/Navbar'

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
