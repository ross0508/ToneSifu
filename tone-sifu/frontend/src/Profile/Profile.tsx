import FullNavbar from "../FullNavbar/FullNavbar";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import LineGraph from "./LineGraph/LineGraph";
import axios from "axios";
import { useState, useEffect } from "react";
import ExpBar from "./ExpBar/ExpBar";

export default function Profile({
  language,
  setLanguage,
  testState,
  setTestState,
}) {
  const { user, isAuthenticated } = useAuth0();
  const [logData, setLogData] = useState([]);
  const [expData, setExpData] = useState([]);
  const [timePeriod, setTimePeriod] = useState(30);
  const [gotLogs, setGotLogs] = useState(false);
  const [gotExp, setGotExp] = useState(false);

  const { logout } = useAuth0();

  useEffect(() => {
    const getExp = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/users/${user.sub}`,
        });
        setExpData(response.data);
        setGotExp(true);
      } catch (error) {
        console.error("Error getting exp data", error);
      }
    };

    if (isAuthenticated) {
      getExp();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const getLogs = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/log/${language}/${user.sub}`,
          params: {
            timePeriod: timePeriod,
          },
        });
        setLogData(response.data);
        setGotLogs(true);
      } catch (error) {
        console.error("Error getting log data", error);
      }
    };

    if (isAuthenticated) {
      getLogs();
    }
  }, [isAuthenticated, language, timePeriod]); // Get logs from database again when language or timePeriod changes

  const handleDropdown = (e) => {
    setTimePeriod(e.target.value);
  };

  if (!isAuthenticated || !gotLogs || !gotExp) {
    return (
      <>
        <FullNavbar />
        <div className="profile-container">
          <h1>loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <FullNavbar
        language={language}
        setLanguage={setLanguage}
        testState={testState}
        setTestState={setTestState}
      />
      <div className="profile-container">
        <div className="profile-information-container">
          <h1>Name</h1>
          <p>{user.name}</p>
          <>
            <p>Total Exp: {expData[0].exp}</p>
          </>
        </div>
        <div className="graph-container">
          <div className="graph-button-container">
            <LineGraph language={language} logData={logData}></LineGraph>
          </div>
          {language == "cmn" && <h1>Exp: {expData[0].exp_cmn}</h1>}
          {language == "cmn" && <ExpBar exp={expData[0].exp_cmn} />}
          {language == "yue" && <h1>Exp: {expData[0].exp_yue}</h1>}
          {language == "yue" && <ExpBar exp={expData[0].exp_yue} />}
        </div>

        <label>Time Frame:</label>
        <select value={timePeriod} onChange={handleDropdown}>
          <option value={7}>Week</option>
          <option value={30}>Month</option>
          <option value={365}> Year</option>
        </select>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>
    </>
  );
}
