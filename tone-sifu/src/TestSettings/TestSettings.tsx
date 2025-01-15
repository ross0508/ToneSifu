import './TestSettings.css'
import { useState } from 'react'
import Checkbox from './Checkbox/Checkbox'

export default function TestSettings({ testStateSetter, wordListSetter, filterList, setFilterList }) {

  //use variable to determine whether mandarin/cantonese database call
  //possibly filter on backend instead of frontend

  const words = [
    {'jyutping' : 'ngo5', 'tone' : 5},
    {'jyutping' : 'tai2', 'tone' : 2},
    {'jyutping' : 'jyut6', 'tone' : 6},
    {'jyutping' : 'keoi5', 'tone' : 5},
    {'jyutping' : 'cou2', 'tone' : 2},
    {'jyutping' : 'dou1', 'tone' : 1},
    {'jyutping' : 'haai4', 'tone' : 4},
    {'jyutping' : 'zyu1', 'tone' : 1},
    {'jyutping' : 'hyun3', 'tone' : 3},
    {'jyutping' : 'ji5', 'tone' : 5},
    {'jyutping' : 'deoi3', 'tone' : 3},
    {'jyutping' : 'daai6', 'tone' : 6},
    {'jyutping' : 'sai3', 'tone' : 3},
    {'jyutping' : 'hou2', 'tone' : 2},
    {'jyutping' : 'zung1', 'tone' : 1},
    {'jyutping' : 'jit6', 'tone' : 6},
    {'jyutping' : 'nei5', 'tone' : 5},
    {'jyutping' : 'cou4', 'tone' : 4},
    {'jyutping' : 'baat3', 'tone' : 3},
    {'jyutping' : 'gau2', 'tone' : 2},
    {'jyutping' : 'maau1', 'tone' : 1},
    {'jyutping' : 'ng5', 'tone' : 5},
    {'jyutping' : 'dyun2', 'tone' : 2},
    {'jyutping' : 'coeng4', 'tone' : 4},
    {'jyutping' : 'ngoi3', 'tone' : 3}
  ]

  const handleChange = (e, tone) => {
    if (e.target.checked) {
      setFilterList([...filterList, tone]);
    } else {
      setFilterList(filterList.filter(item => item != tone));
    }
  };

  const handleSubmit = () => {
    if (filterList.length == 0) {
      console.log("error no select"); // Put actual message on screen here instead
    } else {
      testStateSetter(1);
      wordListSetter(words.filter(word => filterList.includes(word.tone)));
    } 
  }

  return (
    <div className='checkbox-container'>
        <Checkbox setter={handleChange} tone={1} />
        <Checkbox setter={handleChange} tone={2} />
        <Checkbox setter={handleChange} tone={3} />
        <Checkbox setter={handleChange} tone={4} />
        <Checkbox setter={handleChange} tone={5} />
        <Checkbox setter={handleChange} tone={6} />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
