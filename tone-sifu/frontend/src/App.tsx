import Hero from "./Hero/Hero";
import Training from "./Training/Training";
import Profile from "./Profile/Profile";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import { useState } from "react";
import FullNavbar from "./FullNavbar/FullNavbar";
import Lessons from "./Lessons/Lessons";

function App() {
  const [language, setLanguage] = useState("cmn");
  const [testState, setTestState] = useState(0);

  return (
    <>
      <CreateUser />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route
          path="/training"
          element={
            <Training
              language={language}
              setLanguage={setLanguage}
              testState={testState}
              setTestState={setTestState}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              language={language}
              setLanguage={setLanguage}
              testState={testState}
              setTestState={setTestState}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
