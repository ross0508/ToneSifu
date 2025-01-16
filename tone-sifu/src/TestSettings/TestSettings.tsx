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
