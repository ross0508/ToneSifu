import TestSettings from "../TestSettings/TestSettings"
import './Training.css'
import { useState } from 'react'

export default function Training() {
  
  const [testState, setTestState] = useState(0);
  const [wordList, setWordList] = useState([]);

  return (
    <div className="training-page">
      <p>Training Page</p>
      {testState==0 && <TestSettings testStateSetter={setTestState} wordListSetter={setWordList}></TestSettings>}
      {testState==1 && <div>{wordList.map((word, index) => <div key={index}>{word.jyutping} - {word.tone}</div>)}</div>}
    </div>
  )
}
