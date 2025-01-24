import NavButton from "./NavButton/NavButton"
import './FullNavbar.css'

export default function FullNavbar() {
  return (
    <div className="navbar-container">
      <NavButton destination="/training" title="Training"></NavButton>
      <NavButton destination="/profile" title="Profile"></NavButton>
    </div>
  )
}
