import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import { ToastContainer } from 'react-toastify'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </main>
  )
}

export default App
