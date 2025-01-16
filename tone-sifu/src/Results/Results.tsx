export default function Results({ questionLog }) {
  return (
    <div>
        {questionLog.map((word) => (
            <>
                <h1>{word.jyutping}</h1>
                
                <h1>{word.correct ? 'Correct' : 'Incorrect'}</h1>
            </>
        ))}
    </div>
  )
}
