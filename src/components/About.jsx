

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        
        <div className="about-left">
          <img
            src="Two.png"
            alt="Futuristic Helmet"
            className="about-image"
          />
        </div>

        {/* Right Side: Information */}
        <div className="about-right">
          <span className="about-subheading">ABOUT US</span>
          
          <h2 className="about-title">
            THE DIGITAL <br />
            FRONTIER
          </h2>

          {/* Pill Tags */}
          <div className="about-tags">
            <span className="tag">Digital</span>
            <span className="tag">Reality</span>
            <span className="tag">Next</span>
          </div>

          {/* Paragraph */}
          <p className="about-text">
            Step into The Digital Frontier, where the boundaries between reality
            and virtual innovation disappear. This is the next era of immersive technology.
          </p>

          {/* Action Buttons */}
          <div className="about-actions">
            <button className="btn-about-primary">Learn More</button>
            <button className="btn-watch">
              <svg className="play-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
              </svg>
              Watch a Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;