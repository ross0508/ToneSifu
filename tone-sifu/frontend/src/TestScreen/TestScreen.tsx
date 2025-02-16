import { useState, useEffect, useRef, createRef } from 'react'
import './TestScreen.css'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

export default function TestScreen({ length, score, setScore, total, setTotal, testStateSetter, words, tones, language, questionLog, setQuestionLog }) {

    const [index, setIndex] = useState(0)
    const [currentWord, setCurrentWord] = useState({})
    const [answered, setAnswered] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [selection, setSelection] = useState(0)

    const cmnToneArrows = ['', 'ā', 'á', 'ǎ', 'à']

    const buttonRef = useRef([])

    const { user, isAuthenticated } = useAuth0();

    buttonRef.current = tones.map((element, i) => buttonRef.current[i] ?? createRef());

    useEffect(() => {
      setCurrentWord(words[index]);
        if (index >= length) {
          if (isAuthenticated) {
            handleSaveLog()
            handleSaveExp()
          }
          testStateSetter(2)
        }
      },
      [index])



    // Keyboard Input

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
      console.log(currentWord)
      
      const audio = new Audio(currentWord.romanization + '.mp3');
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
          handleAudio() // Plays audio for current word
          break;
      }
    }

    
    const sortedTones = tones.sort(); // Maybe move this so it doesnt run every refresh

    const handleAnswer = (i, tone) => {
      if (!answered && tones.includes(tone)) { // Ensure user hasn't answered yet and isn't hitting key for invalid tone
        setSelection(i)

        const newTotal= total.map((s, i) => { // Increment total questions answered for both total score and current tone
          if (i == 0 || i == currentWord.tone) {
            return s + 1;
          } else {
            return s;
          }
        });
        setTotal(newTotal);

        if (tone == currentWord.tone) {
          setCorrect(true);

          const newScore= score.map((s, i) => { // Increment correct answers for both total score and current tone
            if (i == 0 || i == currentWord.tone) {
              return s + 1;
            } else {
              return s;
            }
          });
          setScore(newScore);

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
        setQuestionLog([...questionLog, {
          'romanization' : currentWord.romanization,
          'honzi' : currentWord.honzi,
          'correct' : correct,
        }
        ]);
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

  const handleAudio = () => {
    const audio = new Audio(currentWord.romanization + '.mp3')
    audio.play()
  }

  const handleSaveLog = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `http://localhost:8080/log/${language}/${user.sub}`,
        params: { 
          score: score,
          total: total
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error saving log data", error)
    }
  }

  const handleSaveExp = async () => {
    try {
      const response = await axios({
        method: "PUT",
        url: `http://localhost:8080/users/${user.sub}`,
        data: { 
          exp: 10
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error saving exp data", error)
    }
  }

  return ( // Show arrows for mandarin
    <div className='test-screen-container'> 
      <button className='play-next-button play-button' onClick={handleAudio}>PLAY</button>
      {answered  && <button className='play-next-button next-button' onClick={handleNext}>Next</button>}
      <div className='answer-button-container'>
        {language == 'cmn' && sortedTones.map((tone, i) => <button ref={buttonRef.current[i]} className='answer-button' key={i} onClick={() => handleAnswer(i, tone)}>{cmnToneArrows[tone]}</button>)}
        {language == 'yue' && sortedTones.map((tone, i) => <button ref={buttonRef.current[i]} className='answer-button' key={i} onClick={() => handleAnswer(i, tone)}>{tone}</button>)}
      </div>
    </div>
  )
}
