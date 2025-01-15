import TestSettings from "../TestSettings/TestSettings"
import './Training.css'
import { useState } from 'react'
import TestScreen from "../TestScreen/TestScreen"

export default function Training() {
  
  const [testState, setTestState] = useState(0);
  const [wordList, setWordList] = useState([]);
  const [filterList, setFilterList] = useState([1,2,3,4,5,6]); // Replace with variable for whether cantonese or mandarin tone list

  return (
    <div className="training-page">
      <p>Training Page</p>
      {testState==0 && <TestSettings testStateSetter={setTestState} wordListSetter={setWordList} filterList={filterList} setFilterList={setFilterList}></TestSettings>}
      {testState==1 && <TestScreen words={wordList} tones={filterList}></TestScreen>}
    </div>
  )
}
