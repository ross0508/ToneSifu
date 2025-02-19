import FullNavbar from "../FullNavbar/FullNavbar"
import { useAuth0 } from "@auth0/auth0-react"
import './Profile.css'
import LineGraph from "./LineGraph/LineGraph";
import axios from 'axios'
import { useState, useEffect } from 'react'
import ExpBar from "./ExpBar/ExpBar";

export default function Profile() {

  const { user, isAuthenticated } = useAuth0();
  const [language, setLanguage] = useState('cmn')
  const [logData, setLogData] = useState([])
  const [expData, setExpData] = useState([])

  useEffect(() => {
    const getExp = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/users/${user.sub}`,
        });
        setExpData(response.data)
      } catch (error) {
        console.error("Error getting exp data", error)
      }
    }

    if (isAuthenticated) {
      getExp()
    }
  }, [isAuthenticated])

  useEffect(() => {
    const getLogs = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/log/${language}/${user.sub}`,
        });
        setLogData(response.data)
      } catch (error) {
        console.error("Error getting log data", error)
      }
    }

    if (isAuthenticated) {
      getLogs()
    }
  }, [isAuthenticated, language]) // Get logs from database again when language setting is changed

  

  if (!isAuthenticated || logData.length === 0 || expData.length === 0) {
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
          {expData.length > 0 && 
          <>
            <p>Total Exp: {expData[0].exp}</p>
          </>
          }
        </div>
        <div className="graph-container">
          <div className="graph-button-container">
            <LineGraph language={language} logData={logData}></LineGraph>
            {language == 'yue' && <button className='graph-language-button' onClick={() => setLanguage('cmn')}>Mandarin</button>}
            {language == 'cmn' && <button className='graph-language-button' onClick={() => setLanguage('yue')}>Cantonese</button>}
          </div>
          {language == 'cmn' && <h1>Exp: {expData[0].exp_cmn}</h1>}
          {language == 'cmn' && <ExpBar exp={expData[0].exp_cmn}/>}
          {language == 'yue' && <h1>Exp: {expData[0].exp_yue}</h1>}
          {language == 'yue' && <ExpBar exp={expData[0].exp_yue}/>}
        </div>
      </div>
    </>
  )
}
