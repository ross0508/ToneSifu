import './Checkbox.css'

export default function Checkbox({ setter, tone }) {
  return (
    <div className='checkbox'>
        <h1>{tone}</h1>
        <input type="checkbox" defaultChecked={true} onChange={(e) => setter(e, tone)} name={tone} />
    </div>
  )
}
