import './TestSettings.css'
import Checkbox from './Checkbox/Checkbox'

export default function TestSettings({ testStateSetter, wordListSetter, filterList, setFilterList }) {

  //use variable to determine whether mandarin/cantonese database call
  //possibly filter on backend instead of frontend

  const words = [
    {'jyutping' : 'ngo5', 'tone' : 5, 'audio' : '../assets/ngo5.mp3'}
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
