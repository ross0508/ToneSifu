import './Hero.css'
import heroimg from '../assets/heroimg.jpg'
import hkimg from '../assets/hkimg.jpg'
import LoginButton from '../LoginButton/LoginButton'

export default function Hero() {
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
        <div className="hero-arrow">
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
          <p className="hero-text">ToneSifu is a platform for practicing your tone recognition. You can listen to a sound and then select the corresponding tone from the options. You can also play the sound again if you need to hear it again. You can also see your progress and compare it to other users.</p>
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
