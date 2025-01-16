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
    const audio = new Audio(currentWord.jyutping + '.mp3');

    useEffect(() => {
      setCurrentWord(words[Math.floor(Math.random()*words.length)]); // Remove word if already used
      if (index >= 10) {
        testStateSetter(2)
      }
    },
      [index])



    //Keyboard Input

    useEffect(() => {
      const handleKeyDown = (e) => {
        handleKey(e);
      };
    
      window.addEventListener("keydown", handleKeyDown);
    
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    });
    
    useEffect(() => {
      
      audio.play()
    }, [currentWord]);
    
    const handleKey = (e) => {
      switch (e.code) {
        case "Digit1":
          handleAnswer(sortedTones.findIndex((n) => n == 1), 1) // Probably a cleaner way of doing
          break;
        case "Digit2":
            handleAnswer(sortedTones.findIndex((n) => n == 2), 2)
          break;
        case "Digit3":
          handleAnswer(sortedTones.findIndex((n) => n == 3), 3)
          break;
        case "Digit4":
          handleAnswer(sortedTones.findIndex((n) => n == 4), 4)
          break;
        case "Digit5":
          handleAnswer(sortedTones.findIndex((n) => n == 5), 5)
          break;
        case "Digit6":
          handleAnswer(sortedTones.findIndex((n) => n == 6), 6)
          break;
        case "Space":
          if (answered) {
            handleNext()
          }
          break;
        case "Enter":
          if (answered) {
            handleNext()
          }
          break;
        case "KeyR":
          audio.play()
          break;
      }
    }

    
    const sortedTones = tones.sort(); // Move this so it doesnt run every refresh

    const handleAnswer = (i, tone) => {
      if (!answered) {
        setSelection(i)
        if (tone == currentWord.tone) {
          setCorrect(true);
          buttonRef.current[i].current.classList.add("answer-button-correct")
        } else {
          setCorrect(false)
          buttonRef.current[i].current.classList.add("answer-button-incorrect")
          buttonRef.current[sortedTones.findIndex((n) => n == currentWord.tone)].current.classList.add("answer-button-correct")
        }
        setAnswered(true);
      }
    }

    const handleNext = () => {
      if (answered) {
        setIndex((i) => i+1);
        setAnswered(false);
        if (correct) {
          buttonRef.current[selection].current.classList.remove("answer-button-correct")
        } else {
          buttonRef.current[selection].current.classList.remove("answer-button-incorrect")
          buttonRef.current[sortedTones.findIndex((n) => n == currentWord.tone)].current.classList.remove("answer-button-correct")
        }
      }
      
    }

  return (
    <div className='test-screen-container'>
      <button onClick={() => audio.play()}>Play</button>
      {sortedTones.map((tone, i) => <button ref={buttonRef.current[i]} className='answer-button' key={i} onClick={() => handleAnswer(i, tone)}>{tone}</button>)}
      {answered && <button onClick={handleNext}>Next</button>}
      {answered && <>{correct ? <h1>CORRECT</h1> : <h1>INCORRECT</h1>}</>}
    </div>
  )
}
