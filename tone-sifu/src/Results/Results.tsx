export default function Results({ questionLog, testStateSetter }) {
  return (
    <div>
      <button onClick={() => testStateSetter(0)}>Retry</button>
        {questionLog.map((word) => (
            <>
                <h1>{word.jyutping}</h1>
                <h1>{word.correct ? 'Correct' : 'Incorrect'}</h1>
            </>
        ))}
    </div>
  )
}
