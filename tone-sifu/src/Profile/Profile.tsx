import FullNavbar from "../FullNavbar/FullNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import './Profile.css'

export default function Profile() {

    const { user, isAuthenticated } = useAuth0();

    console.log(user)

  return (
    <>
      <FullNavbar />
      <div className="profile-container">
        <div className="profile-information-container">
          <h1>Username</h1>
          <p>{user?.name}</p>
        </div>
      </div>
    </>
  )
}
