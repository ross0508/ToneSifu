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
      console.log(currentWord.audio)
      console.log(currentWord.jyutping)
      const audio = new Audio(currentWord.jyutping + '.mp3');
      audio.play()
    }, [currentWord]);
    
    const handleKey = (e) => {
      switch (e.code) {
        case "Digit1":
          handleAnswer(0, 1)
          break;
        case "Digit2":
            handleAnswer(1, 2)
          break;
        case "Digit3":
          handleAnswer(2, 3)
          break;
        case "Digit4":
          handleAnswer(3, 4)
          break;
        case "Digit5":
          handleAnswer(4, 5)
          break;
        case "Digit6":
          handleAnswer(5, 6)
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
        }
      }
      
    }

  return (
    <div>
      {sortedTones.map((tone, i) => <button ref={buttonRef.current[i]} className='answer-button' key={i} onClick={() => handleAnswer(i, tone)}>{tone}</button>)}
      {answered && <button onClick={handleNext}>Next</button>}
      {answered && <>{correct ? <h1>CORRECT</h1> : <h1>INCORRECT</h1>}</>}
    </div>
  )
}
