import FullNavbar from "../FullNavbar/FullNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import './Profile.css'
import LineGraph from "./LineGraph/LineGraph";
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Profile() {

  const { user, isAuthenticated } = useAuth0();
  const [language, setLanguage] = useState('cmn')
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
  }, [isAuthenticated, language]) // Get logs from database again when language setting is changed

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

  return (
    <>
      <FullNavbar />
      <div className="profile-container">
        <div className="profile-information-container">
          <h1>Name</h1>
          <p>{user.name}</p>
        </div>
        <div className="graph-container">
          <LineGraph language={language} logData={logData}></LineGraph>
          {language == 'yue' && <button className='graph-language-button' onClick={() => setLanguage('cmn')}>Mandarin</button>}
          {language == 'cmn' && <button className='graph-language-button' onClick={() => setLanguage('yue')}>Cantonese</button>}
        </div>
      </div>
    </>
  )
}
