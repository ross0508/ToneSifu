import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import Training from "./Training/Training"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </>
  )
}

export default App
