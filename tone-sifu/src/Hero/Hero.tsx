import './Hero.css'
import heroimg from '../assets/heroimg.jpg'
import LoginButton from '../LoginButton/LoginButton'

export default function Hero() {
  return (
    <div className="hero-container">
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
  )
}
