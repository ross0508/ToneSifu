import { useState, useEffect } from 'react';
import LoginButton from '../LoginButton/LoginButton';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); 
    } else {
      setShow(true);  
    }

    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
        <nav className={`navbar-container active ${show && 'hidden'}`}>
          <LoginButton></LoginButton>
        </nav>
  )
}

export default Navbar;