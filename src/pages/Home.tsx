import templeHero from '../assets/temple-hero.jpg'

function Home() {
  return (
    <>
      <section className="hero-section">
        <img
          src={templeHero}
          alt="Radha Govinda Temple"
          className="hero-image"
        />

        <div className="hero-text hero-text-bottom">
          <div className="hero-content-panel">
            <p className="hero-subtitle">Hare Krishna</p>

            <h1 className="hero-title">Radha Govinda Temple</h1>

            <p className="hero-description">
              Coming soon to Coral Springs, Florida. A spiritual home for devotion,
              kirtan, community, and service.
            </p>

            <div className="hero-buttons">
              <a href="#donate" className="btn-primary">
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-block section-light">
        <div className="page">
          <h2>About the Temple</h2>
          <p>
            Radha Govinda Temple is being established to serve the Coral Springs
            community with kirtan, Bhagavad Gita classes, spiritual gatherings,
            prasadam, and devotional service.
          </p>
        </div>
      </section>

      <section id="events" className="content-block section-warm">
        <div className="page">
          <h2>Upcoming Events</h2>

          <div className="card-grid">
            <div className="card">
              <h3>Sunday Kirtan</h3>
              <p>Weekly kirtan, spiritual discussion, and prasadam.</p>
            </div>

            <div className="card">
              <h3>Bhagavad Gita Class</h3>
              <p>Learn and discuss spiritual knowledge with the community.</p>
            </div>

            <div className="card">
              <h3>Festival Celebrations</h3>
              <p>Celebrate Janmashtami, Gaura Purnima, and other festivals.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="content-block section-light">
        <div className="page">
          <h2>Contact</h2>
          <p>Email: info@yourtemple.org</p>
          <p>Phone: (000) 000-0000</p>
          <p>Location: Coral Springs, Florida</p>
        </div>
      </section>

      <section id="donate" className="content-block section-warm">
        <div className="page">
          <h2>Support the Temple</h2>

          <div className="donate-box">
            <p>
              Please make tax deductible donations to support the temple mission.
            </p>
            <p>
              <strong>Zelle:</strong> yftssfl123@gmail.com
            </p>

            <a href="#" className="btn-primary donate-inline-button">
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home