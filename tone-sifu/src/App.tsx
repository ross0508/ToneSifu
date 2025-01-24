import Hero from "./Hero/Hero"
import Training from "./Training/Training"
import Profile from "./Profile/Profile"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/training" element={<Training />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
