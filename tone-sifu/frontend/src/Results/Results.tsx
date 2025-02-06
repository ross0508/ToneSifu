import './Results.css'

export default function Results({ questionLog, testStateSetter }) {
  
console.log(questionLog)

  return (
    <div className='results-container'>
      <button onClick={() => testStateSetter(0)}>Retry</button>
      {questionLog.map((word) => (
          <div className="result-card">
            <h1 className='results-honzi'>{word.honzi}</h1>{console.log(word)}
            <h1 className='translucent-box'>{word.romanization}</h1>
            <h1 className='translucent-box'>{word.correct ? 'Correct' : 'Incorrect'}</h1>
          </div>
      ))}
    </div>
  )
}
