import './Checkbox.css'

export default function Checkbox({ setter, tone }) {
  return (
    <div className='checkbox'>
        <h1>{tone}</h1>
        <input type="checkbox" onChange={() => setter(tone)} name={tone} />
    </div>
  )
}
