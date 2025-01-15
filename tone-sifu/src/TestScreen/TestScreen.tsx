import { useState, useEffect, useRef, createRef } from 'react'
import './TestScreen.css'

export default function TestScreen({ testStateSetter, words, tones }) {

    const [index, setIndex] = useState(0)
    const [currentWord, setCurrentWord] = useState({})
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [selection, setSelection] = useState(0)


    const buttonRef = useRef([])

    buttonRef.current = tones.map((element, i) => buttonRef.current[i] ?? createRef());


    useEffect(() => {
      setCurrentWord(words[Math.floor(Math.random()*words.length)]);
      if (index >= 5) {
        testStateSetter(2)
      }
    },
      [index])
    
    const sortedTones = tones.sort();

    const handleAnswer = (i, tone) => {
      if (!answered) {
        setSelection(i)
        if (tone == currentWord.tone) {
          setCorrect(true);
          buttonRef.current[i].current.classList.add("answer-button-correct")
        } else {
          setCorrect(false)
          buttonRef.current[i].current.classList.add("answer-button-incorrect")
        }

        setAnswered(true);
      }
    }

    const handleNext = () => {
      setIndex((i) => i+1);
      setAnswered(false);
      if (correct) {
        buttonRef.current[selection].current.classList.remove("answer-button-correct")
      } else {
        buttonRef.current[selection].current.classList.remove("answer-button-incorrect")
      }
    }

  return (
    <div>
      <div>{currentWord.jyutping}</div>
      {sortedTones.map((tone, i) => <button ref={buttonRef.current[i]} className='answer-button' key={i} onClick={() => handleAnswer(i, tone)}>{tone}</button>)}
      {answered && <button onClick={handleNext}>Next</button>}
      {correct ? <h1>CORRECT</h1> : <h1>INCORRECT</h1>}
    </div>
  )
}
