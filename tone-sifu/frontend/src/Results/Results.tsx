import './Results.css'

export default function Results({ score, total, questionLog, testStateSetter }) {
  
console.log(score)
console.log(total)
console.log(total[1])

  return (
    <>
      <div className='score-container'>
        <div className='score-display'>Score: {score[0]} / {total[0]}</div>
        <div className='score-display'>{total.map((tone, i) => {
          return (
            <>
              {i !== 0 && total[i] !== 0 ? (
                <div>Tone {i}: {score[i]} / {tone}</div>
              ) : (
                <></>
              )}
            </>
          );
        })}</div>
        <button className='retry-button' onClick={() => testStateSetter(0)}>Retry</button>
      </div>
      <div className='results-container'>
        {questionLog.map((word) => (
            <div className="result-card">
              <h1 className='results-honzi'>{word.honzi}</h1>
              <h1 className='translucent-box'>{word.romanization}</h1>
              <h1 className='translucent-box'>{word.correct ? 'Correct' : 'Incorrect'}</h1>
            </div>
        ))}
      </div>
    </>
  )
}
