import TestSettings from "../TestSettings/TestSettings";
import "./Training.css";
import { useState } from "react";
import TestScreen from "../TestScreen/TestScreen";
import Results from "../Results/Results";
import FullNavbar from "../FullNavbar/FullNavbar";

export default function Training() {
  const [language, setLanguage] = useState("cmn");
  const [testState, setTestState] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [questionLog, setQuestionLog] = useState([]);
  const [score, setScore] = useState(0); // Tracks total score
  const [total, setTotal] = useState([]); // Tracks number of questions
  const [length, setLength] = useState(10);

  return (
    <>
      <FullNavbar />
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
