import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <ul className="navbar-container">
        <Link to="/" className="navbutton navbutton-primary">Home</Link>
        <Link to="/Training" className="navbutton navbutton-secondary">Training</Link>
    </ul>
  )
}
