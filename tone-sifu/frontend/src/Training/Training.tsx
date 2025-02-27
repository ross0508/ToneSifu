import TestSettings from "../TestSettings/TestSettings";
import "./Training.css";
import { useEffect, useState } from "react";
import TestScreen from "../TestScreen/TestScreen";
import Results from "../Results/Results";
import FullNavbar from "../FullNavbar/FullNavbar";

export default function Training({
  language,
  setLanguage,
  testState,
  setTestState,
  lessonState,
  setLessonState,
}) {
  const toneArray = {
    cmn: [1, 2, 3, 4],
    yue: [1, 2, 3, 4, 5, 6],
  };
  const [wordList, setWordList] = useState([]);
  const [filterList, setFilterList] = useState(toneArray[language]);
  const [questionLog, setQuestionLog] = useState([]);
  const [score, setScore] = useState(0); // Tracks total score
  const [total, setTotal] = useState([]); // Tracks number of questions
  const [length, setLength] = useState(10);

  useEffect(() => {
    setFilterList(toneArray[language]);
  }, [language]);

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
      <div className="training-page">
        {testState == 0 && (
          <TestSettings
            length={length}
            setLength={setLength}
            setScore={setScore}
            setTotal={setTotal}
            setQuestionLog={setQuestionLog}
            testStateSetter={setTestState}
            wordListSetter={setWordList}
            filterList={filterList}
            setFilterList={setFilterList}
            setLanguage={setLanguage}
            language={language}
          ></TestSettings>
        )}
        {testState == 1 && (
          <TestScreen
            length={length}
            score={score}
            setScore={setScore}
            total={total}
            setTotal={setTotal}
            testStateSetter={setTestState}
            words={wordList}
            tones={filterList}
            language={language}
            questionLog={questionLog}
            setQuestionLog={setQuestionLog}
          ></TestScreen>
        )}
        {testState == 2 && (
          <Results
            score={score}
            total={total}
            questionLog={questionLog}
            testStateSetter={setTestState}
          ></Results>
        )}
      </div>
    </>
  );
}
