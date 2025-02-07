import TestSettings from "../TestSettings/TestSettings"
import './Training.css'
import { useState } from 'react'
import TestScreen from "../TestScreen/TestScreen"
import Results from "../Results/Results"
import FullNavbar from "../FullNavbar/FullNavbar"
import SelectLanguage from "../TestSettings/SelectLanguage/SelectLanguage"

export default function Training() {

  const [language, setLanguage] = useState('cmn')
  const [testState, setTestState] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [filterList, setFilterList] = useState([1,2,3,4]); // Replace with variable for whether cantonese or mandarin tone list
  const [questionLog, setQuestionLog] = useState([])

  return (
    <>
      <FullNavbar />
      <div className="training-page">
        {testState==0 && <TestSettings setQuestionLog={setQuestionLog} testStateSetter={setTestState} wordListSetter={setWordList} filterList={filterList} setFilterList={setFilterList} setLanguage={setLanguage} language={language}></TestSettings>}
        {testState==1 && <TestScreen testStateSetter={setTestState} words={wordList} tones={filterList} language={language} questionLog={questionLog} setQuestionLog={setQuestionLog}></TestScreen>}
        {testState==2 && <Results questionLog={questionLog} testStateSetter={setTestState}></Results>}
      </div>
    </>
  )
}
