import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Services from "./components/Services.jsx"
import Work from "./components/Work.jsx"
import Process from "./components/Process.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {

  return (
    <>
      <main className="relative w-screen overflow-x-hidden">
        <Navbar />
        <Home />
        <Services />
        <Work />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
