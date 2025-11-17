import './Hero.css'
import heroimg from '../assets/heroimg.jpg'
import hkimg from '../assets/hkimg.jpg'
import LoginButton from '../LoginButton/LoginButton'
import { useState, useEffect } from 'react'
import HeroNavbar from "../HeroNavbar/HeroNavbar"
import { Link } from 'react-router-dom'

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
    <>
      <HeroNavbar />
      <div className='hero-page'>
        <section className='hero-section'>
          <div  className="hero-container">
            <div className="hero-left">
              <h1 className="hero-title">ToneSifu</h1>
              <h2 className="hero-subtitle">Chinese tone trainer</h2>
              <div className='button-container'>
                <LoginButton type="hero-button"></LoginButton>
                <Link className='secondary-button' to={'/training'}>Start Now</Link>
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
            <p className="hero-text">Learn to tell apart tones in either <span className='bold'>Mandarin</span> or <span className='bold'>Cantonese</span>. ToneSifu uses audio-based training to help you practice your tone recognition and master a new language!</p>
          </div>
          </div>
        </section>
      </div>
    </>
  )
}
