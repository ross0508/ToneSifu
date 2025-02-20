import "./SelectLanguage.css";

export default function SelectLanguage({
  setLanguage,
  setSettingsPage,
  setFilterList,
}) {
  const handleSelection = (selection) => {
    setLanguage(selection);
    const toneArray = {
      cmn: [1, 2, 3, 4],
      yue: [1, 2, 3, 4, 5, 6],
    };
    setFilterList(toneArray[selection]);
    setSettingsPage(1);
  };

  return (
    <div className="select-language-container">
      <button onClick={() => handleSelection("cmn")} className="language-card">
        Mandarin
      </button>
      <button onClick={() => handleSelection("yue")} className="language-card">
        Cantonese
      </button>
    </div>
  );
}
