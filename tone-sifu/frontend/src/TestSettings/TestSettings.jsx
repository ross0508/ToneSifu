import "./TestSettings.css";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import axios from "axios";

export default function TestSettings({
  length,
  setLength,
  setScore,
  setTotal,
  setQuestionLog,
  testStateSetter,
  wordListSetter,
  filterList,
  setFilterList,
  setLanguage,
  language,
}) {
  const [settingsPage, setSettingsPage] = useState(1);

  const handleChange = (e, tone) => {
    if (e.target.checked) {
      setFilterList([...filterList, tone]);
    } else {
      setFilterList(filterList.filter((item) => item != tone));
    }
  };

  const getBackend = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8080/words/${language}/random/${length}`,
        params: {
          tones: filterList, // Send tone list for filtering as query params
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  const handleSubmit = async () => {
    if (filterList.length < 2) {
      alert("Please select at least 2 tones.");
    } else {
      const wordsFromBackend = await getBackend();
      wordListSetter(wordsFromBackend); // Gets list of words for test
      setQuestionLog([]); // Resets list of answered questions
      setScore([0, 0, 0, 0, 0, 0, 0]); // Resets score
      setTotal([0, 0, 0, 0, 0, 0, 0]); // Resets question counter
      testStateSetter(1); // Moves to test screen
    }
  };

  const handleSlider = (e) => {
    setLength(e.target.value);
  };

  return (
    // Literally reverse everything, start button at bottom etc
    <>
      {settingsPage == 1 && (
        <div className="test-settings-container">
          <div className="settings-button-container">
            <button className="start-button" onClick={handleSubmit}>
              Start
            </button>
          </div>
          <h1 className="settings-info-text">Select Tones</h1>
          {language == "yue" && (
            <div className="checkbox-container">
              <Checkbox setter={handleChange} tone={1} />
              <Checkbox setter={handleChange} tone={2} />
              <Checkbox setter={handleChange} tone={3} />
              <Checkbox setter={handleChange} tone={4} />
              <Checkbox setter={handleChange} tone={5} />
              <Checkbox setter={handleChange} tone={6} />
            </div>
          )}
          {language == "cmn" && (
            <div className="checkbox-container">
              <Checkbox setter={handleChange} tone={1} />
              <Checkbox setter={handleChange} tone={2} />
              <Checkbox setter={handleChange} tone={3} />
              <Checkbox setter={handleChange} tone={4} />
            </div>
          )}
          <h1 className="grey-text">Test Length</h1>
          <input
            className="length-slider"
            type="range"
            min="5"
            max="50"
            onChange={handleSlider}
            value={length}
          ></input>
          <h1>
            {length} <span className="grey-text">words</span>
          </h1>
        </div>
      )}
    </>
  );
}
