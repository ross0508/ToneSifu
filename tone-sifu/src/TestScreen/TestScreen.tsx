import { useState } from 'react'

export default function TestScreen({ words, tones }) {

    const [index, setIndex] = useState(0)

  return (
    <div>
      {tones.sort().map(tone => <button key={tone}>{tone}</button>)}
    </div>
  )
}
