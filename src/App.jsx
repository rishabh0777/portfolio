import React from 'react'
import 'remixicon/fonts/remixicon.css';
import Landing from './Components/Landing.jsx'
import Nav from './Components/Nav.jsx'
import Skill from './Components/Skill.jsx'
import Work from './Components/Work.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'

export default function App() {
  return (
    <>
    <Nav />
    <Landing />
    <Skill />
    <Work />
    <Contact />
    <About />
    <Footer />
    </>
  )
}