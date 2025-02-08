import './TestSettings.css'
import { useState } from 'react'
import Checkbox from './Checkbox/Checkbox'
import SelectLanguage from './SelectLanguage/SelectLanguage'
import axios from 'axios'

export default function TestSettings({ setScore, setTotal, setQuestionLog, testStateSetter, wordListSetter, filterList, setFilterList, setLanguage, language }) {

  const [settingsPage, setSettingsPage] = useState(0)

  //use variable to determine whether mandarin/cantonese database call
  //possibly filter on backend instead of frontend

  const yueWords = [
    {'jyutping' : 'zyu1', 'tone' : 1}, // Delete after adding all to PostgreSQL
    {'jyutping' : 'ceoi1', 'tone' : 1},
    {'jyutping' : 'cin4', 'tone' : 4},
    {'jyutping' : 'soeng2', 'tone' : 2},
    {'jyutping' : 'zoeng1', 'tone' : 1},
    {'jyutping' : 'jyu4', 'tone' : 4},
    {'jyutping' : 'zi1', 'tone' : 1},
    {'jyutping' : 'si3', 'tone' : 3},
    {'jyutping' : 'daa2', 'tone' : 2},
    {'jyutping' : 'saai1', 'tone' : 1},
    {'jyutping' : 'pin1', 'tone' : 1},
    {'jyutping' : 'ji2', 'tone' : 2},
    {'jyutping' : 'so1', 'tone' : 1},
    {'jyutping' : 'fau2', 'tone' : 2},
    {'jyutping' : 'hin2', 'tone' : 2},
    {'jyutping' : 'leon4', 'tone' : 4},
    {'jyutping' : 'ming4', 'tone' : 4},
    {'jyutping' : 'duk6', 'tone' : 6},
    {'jyutping' : 'dung6', 'tone' : 6},
    {'jyutping' : 'man5', 'tone' : 5},
    {'jyutping' : 'maa6', 'tone' : 6},
    {'jyutping' : 'seoi5', 'tone' : 5},
    {'jyutping' : 'tai4', 'tone' : 4},
    {'jyutping' : 'ngo6', 'tone' : 6},
    {'jyutping' : 'lek1', 'tone' : 1},
    {'jyutping' : 'gaak3', 'tone' : 3},
    {'jyutping' : 'cyun2', 'tone' : 2},
    {'jyutping' : 'ci3', 'tone' : 3},
    {'jyutping' : 'leoi6', 'tone' : 6},
    {'jyutping' : 'mong5', 'tone' : 5},
    {'jyutping' : 'mou5', 'tone' : 5},
    {'jyutping' : 'san4', 'tone' : 4},
    {'jyutping' : 'soek3', 'tone' : 3},
    {'jyutping' : 'caan4', 'tone' : 4}
  ]

  const cmnWords = [
    {'jyutping' : 'shuǐ', 'tone' : 3},
    {'jyutping' : 'rén', 'tone' : 2},
  ]

  const handleChange = (e, tone) => {
    if (e.target.checked) {
      setFilterList([...filterList, tone]);
    } else {
      setFilterList(filterList.filter(item => item != tone));
    }
  };

  const getBackend = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/words/${language}/random/10`,  // Change so test length can be customised
        params: { 
          tones: filterList  // Send as query parameters
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  }

  const handleSubmit = async () => {
    if (filterList.length < 2) {
      alert("Please select at least 2 tones.");
    } else {
      const wordsFromBackend = await getBackend()
      wordListSetter(wordsFromBackend) // Gets list of words for test
      setQuestionLog([]) // Resets list of answered questions
      setScore(0) // Resets score
      setScore([0, 0, 0, 0, 0, 0, 0])
      setTotal([0, 0, 0, 0, 0, 0, 0])
      testStateSetter(1) // Moves to test screen
    } 
  }

  return (
    <>
      {settingsPage == 0 && <SelectLanguage setLanguage={setLanguage} setSettingsPage={setSettingsPage} setFilterList={setFilterList}></SelectLanguage>}

      {settingsPage == 1 && <div className='test-settings-container'>
        <button onClick={() => setSettingsPage(0)}>Back</button>
        {language == 'yue' && <div className='checkbox-container'>
          <Checkbox setter={handleChange} tone={1} />
          <Checkbox setter={handleChange} tone={2} />
          <Checkbox setter={handleChange} tone={3} />
          <Checkbox setter={handleChange} tone={4} />
          <Checkbox setter={handleChange} tone={5} />
          <Checkbox setter={handleChange} tone={6} />
        </div>
        }
        {language == 'cmn' && <div className='checkbox-container'>
          <Checkbox setter={handleChange} tone={1} />
          <Checkbox setter={handleChange} tone={2} />
          <Checkbox setter={handleChange} tone={3} />
          <Checkbox setter={handleChange} tone={4} />
        </div>
        }
        <button onClick={handleSubmit}>Submit</button>
      </div>}
    </>
  )
}
