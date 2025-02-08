import FullNavbar from "../FullNavbar/FullNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import './Profile.css'
import LineGraph from "./LineGraph/LineGraph";
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Profile() {

  const { user, isAuthenticated } = useAuth0();
  const [language, setLanguage] = useState('yue')
  const [logData, setLogData] = useState([])

  useEffect(() => {
    
    const getLogs = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/log/${language}/${user.sub}`,
        });
        console.log(response.data)
        setLogData(response.data)
      } catch (error) {
        console.error("Error getting log data", error)
      }
    }
    if (isAuthenticated) {
      getLogs()
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <FullNavbar />
        <div className="profile-container">
            
          <h1>loading...</h1>
        </div>
      </>
    )
  }

  const dates = logData.map(item => item.date); // Get all the dates
  const totalAnswered = logData.map(item => item.total_answered.slice(1)); // Skip index 0, take values from 1 to 5
  const totalCorrect = logData.map(item => item.total_correct.slice(1));

  return (
    <>
      <FullNavbar />
      <div className="profile-container">
        <div className="profile-information-container">
          <h1>Name</h1>
          <p>{user.name}</p>
        </div>
        <div className="graph-container">
          <LineGraph logData={logData}></LineGraph>
        </div>
      </div>
    </>
  )
}
