import { Link } from 'react-router-dom'

export default function NavButton({ destination, title }) {
  return (
    <Link className='navbutton' to={destination}>{title}</Link>
  )
}
