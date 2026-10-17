

const Future = () => {
  return (
    <section className="future-container">
      <div className="future-card">
        {/* Background Overlay Image */}
        <img
          src="Fifth.jpg"
          alt="Futuristic Headset"
          className="future-bg-image"
        />

        {/* Dark Vignette Overlay for Text Readability */}
        <div className="future-overlay"></div>

        {/* Content Box */}
        <div className="future-content">
          {/* Left Title */}
          <h2 className="future-title">
            DIVE INTO THE <br />
            FUTURE
          </h2>

          {/* Right Play Button & Subtext */}
          <div className="future-right">
            <button className="future-play-btn" aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="9.5 7.5 16.5 12 9.5 16.5 9.5 7.5" />
              </svg>
            </button>

            <p className="future-text">
              Invites you to immerse yourself in the groundbreaking world of NeoVision. Explore the limitless possibilities of futuristic technology and virtual reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;