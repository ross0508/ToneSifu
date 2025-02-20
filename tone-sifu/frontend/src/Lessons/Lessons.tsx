import React from "react";
import "./Lessons.css";
import FullNavbar from "../FullNavbar/FullNavbar";

export default function Lessons({
  language,
  setLanguage,
  testState,
  setTestState,
}) {
  console.log(testState);
  return (
    <>
      <FullNavbar
        language={language}
        setLanguage={setLanguage}
        testState={testState}
        setTestState={setTestState}
      />
      <div className="lessons-container">
        <p>Lessons</p>
      </div>
    </>
  );
}
