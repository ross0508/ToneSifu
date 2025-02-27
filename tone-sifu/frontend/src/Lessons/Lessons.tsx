import "./Lessons.css";
import FullNavbar from "../FullNavbar/FullNavbar";
import LessonCard from "./LessonCard/LessonCard";
import { useState } from "react";
import LessonScreen from "./LessonScreen/LessonScreen";

export default function Lessons({
  language,
  setLanguage,
  testState,
  setTestState,
  lessonState,
  setLessonState,
}) {
  return (
    <>
      <FullNavbar
        language={language}
        setLanguage={setLanguage}
        testState={testState}
        setTestState={setTestState}
        lessonState={lessonState}
        setLessonState={setLessonState}
      />
      <div className="lessons-container">
        {language == "cmn" && lessonState == 0 && (
          <div className="lesson-card-container">
            <LessonCard
              name="1"
              description="Rising and Falling"
              setLessonState={setLessonState}
            />
            <LessonCard
              name="2"
              description="High Flat"
              setLessonState={setLessonState}
            />
          </div>
        )}
        {language == "yue" && lessonState == 0 && (
          <div className="lesson-card-container">
            <LessonCard
              name="1"
              description="High Flat and Low-High Rising"
              setLessonState={setLessonState}
            />
            <LessonCard
              name="2"
              description="Low Falling"
              setLessonState={setLessonState}
            />
          </div>
        )}
        {lessonState == 1 && <LessonScreen />}
      </div>
    </>
  );
}
