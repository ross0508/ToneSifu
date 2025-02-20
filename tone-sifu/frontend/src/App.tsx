import Hero from "./Hero/Hero";
import Training from "./Training/Training";
import Profile from "./Profile/Profile";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import { useState } from "react";
import FullNavbar from "./FullNavbar/FullNavbar";

function App() {
  const [language, setLanguage] = useState("cmn");
  const [testState, setTestState] = useState(0);

  return (
    <>
      <CreateUser />
      <FullNavbar
        language={language}
        setLanguage={setLanguage}
        testState={testState}
        setTestState={setTestState}
      />
      <Routes>
        <Route path="/" element={<Hero />} />
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
