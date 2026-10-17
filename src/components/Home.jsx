

const Home = () => {
  return (
    <section className="hero-container">
      <div className="bg-diagonal-line"></div>
      <div className="bg-bottom-bar"></div>

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">
            <span className="number">05</span>
            <span className="label">FUTURISTIC</span>
          </div>

          <h1 className="hero-title">
            NEW DIGITAL <br />
            UNIVERSE
          </h1>

          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="One.png"
            alt="Person wearing VR Headset"
            className="hero-image"
          />
        </div>
      </div>

      <div className="stat-badge">
        <span className="stat-percent">47.2%</span>
        <span className="stat-label">Reality</span>
      </div>

      <div className="hero-footer">
        <div className="trusted-clients">
          <span className="trusted-title">Trusted by Clients</span>
          <div className="clients-group">
            <div className="avatar-stack">
              <img src="https://i.pravatar.cc/100?img=32" alt="Client Avatar" />
              <img src="https://i.pravatar.cc/100?img=12" alt="Client Avatar" />
              <img src="https://i.pravatar.cc/100?img=47" alt="Client Avatar" />
              <img src="https://i.pravatar.cc/100?img=68" alt="Client Avatar" />
            </div>
            <span className="client-count">20+</span>
          </div>
        </div>

        <div className="emblem-circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>

        <p className="hero-description">
          In this futuristic realm, users can explore hyper-realistic virtual environments, interact with AI-driven avatars.
        </p>
      </div>

      <div className="hero-logos">
        <div className="logo-item">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span>Logoipsum</span>
        </div>
        <div className="logo-item">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 2,22 22,22" />
          </svg>
          <span>Logoipsum</span>
        </div>
      </div>
    </section>
  );
};

export default Home;