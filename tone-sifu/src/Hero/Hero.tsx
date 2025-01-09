import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className='hero-title'>About</h1>
      </div>
      <div className="hero-right">
        <h1 className="hero-title">Tone Sifu</h1>
        <h2 className="hero-subtitle">Tone training platform</h2>
        <div className='button-container'>
          
        <button className="hero-button hero-button-secondary">Log In</button>
          <button className="hero-button hero-button-primary">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
