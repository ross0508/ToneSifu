import './Hero.css'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className='hero-title'>About</h1>
        <p className="hero-description">The concept of this project is to develop a website which will allow users to practice
differentiating tones in two languages: Beijing Mandarin and Hong Kong Cantonese.
Learning to tell apart tones in these languages can be very challenging, especially if the
learner does not already speak a tonal language and many learners never master them
even after years of study. However, it is vital to gain an understanding of tones, as they
are required to determine the meaning of words, and without them a fundamental layer of
information - in the form of pitch - is missing.</p>
      </div>
      <div className="hero-right">
        <h1 className="hero-title">Tone Sifu</h1>
        <h2 className="hero-subtitle">Tone training platform</h2>
        <div className='button-container'>
          <button className="hero-button hero-button-primary">Sign Up</button>
          <button className="hero-button hero-button-secondary">Log In</button>
        </div>
      </div>
    </div>
  )
}
