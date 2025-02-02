import FullNavbar from "../FullNavbar/FullNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import './Profile.css'
import LineGraph from "./LineGraph/LineGraph";

export default function Profile() {

    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
      return (
        <>
          <FullNavbar />
          <div className="profile-container">
              
            <h1>loading</h1>
          </div>
        </>
      )
    }

  return (
    <>
      <FullNavbar />
      <div className="profile-container">
        <div className="profile-information-container">
          <h1>Name</h1>
          <p>{user?.name}</p>
        </div>
        <div className="graph-container">
          <LineGraph></LineGraph>
        </div>
      </div>
    </>
  )
}
