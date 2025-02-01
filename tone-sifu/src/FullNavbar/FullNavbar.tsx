import NavButton from "./NavButton/NavButton"
import './FullNavbar.css'
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from '../LoginButton/LoginButton';

export default function FullNavbar() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="navbar-container">
      <NavButton destination="/training" title="Training"></NavButton>
      {isAuthenticated && <NavButton destination="/profile" title="Profile"></NavButton>} {/* Shows link to profile only if user is logged in */}
      {!isAuthenticated && <LoginButton type="navbutton" />} {/* Shows login button only if user is not logged in */}
    </div>
  )
}
