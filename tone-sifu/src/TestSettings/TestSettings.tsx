import './TestSettings.css'
import Checkbox from './Checkbox/Checkbox'

export default function TestSettings({ testStateSetter, wordListSetter, filterList, setFilterList }) {

  //use variable to determine whether mandarin/cantonese database call
  //possibly filter on backend instead of frontend

  const words = [
    {'jyutping' : 'zyu1', 'tone' : 1},
    {'jyutping' : 'ceoi1', 'tone' : 1},
    {'jyutping' : 'cin4', 'tone' : 4},
    {'jyutping' : 'soeng2', 'tone' : 2},
    {'jyutping' : 'zoeng1', 'tone' : 1},
    {'jyutping' : 'jyu4', 'tone' : 4},
    {'jyutping' : 'zi1', 'tone' : 1},
    {'jyutping' : 'si3', 'tone' : 3},
    {'jyutping' : 'daa2', 'tone' : 2},
    {'jyutping' : 'saai1', 'tone' : 1}
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
