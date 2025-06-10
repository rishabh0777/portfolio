import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Services from "./components/Services.jsx"
import "./App.css"

function App() {

  return (
    <>
      <main className="relative w-full">
        <Navbar />
        <Home />
        <Services />
      </main>
    </>
  )
}

export default App
