import './Hero.css'
import heroimg from '../assets/heroimg.jpg'
import hkimg from '../assets/hkimg.jpg'
import LoginButton from '../LoginButton/LoginButton'
import { useState, useEffect } from 'react'

export default function Hero() {

  const [hideArrow, setHideArrow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

   const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setHideArrow(true); 
      } else {
        setHideArrow(false);  
      }
  
      setLastScrollY(window.scrollY); 
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, [lastScrollY]);

  const handleArrowClick = () => {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
  }

  


  return (
    <div className='hero-page'>
      <section className='hero-section'>
        <div  className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">ToneSifu</h1>
            <h2 className="hero-subtitle">Tone training platform</h2>
            <div className='button-container'>
              <LoginButton></LoginButton>
            </div>
          </div>
          <div className="hero-right">
            <img className="hero-image" src={heroimg} />
          </div>
        </div>
        <div className={`hero-arrow show ${hideArrow && 'hidden'}`} onClick={handleArrowClick}>
          <h3>Learn more</h3>
          <h3>↓</h3>
        </div>
      </section>
      

      <section className="hero-section">
        <div className="hero-container">
        <div className="hero-right">
          <img className="info-image" src={hkimg} />
        </div>
        <div className="hero-left">
          <h1 className="hero-title">Info</h1>
          <h2 className="hero-subtitle">How it works</h2>
          <p className="hero-text">ToneSifu is a platform for practicing your tone recognition. You listen to a word, select the corresponding tone, and then select the correct option. You can also see your progress over time and the areas you struggle with.</p>
          <div className='info-box'>
            <h1>Mandarin</h1>
            <h1>Cantonese</h1>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
