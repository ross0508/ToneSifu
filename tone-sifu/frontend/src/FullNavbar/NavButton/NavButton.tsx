import { Link } from "react-router-dom";

export default function NavButton({ destination, title, resetTraining }) {
  return (
    <Link onClick={resetTraining} className="navbutton" to={destination}>
      {title}
    </Link>
  );
}
