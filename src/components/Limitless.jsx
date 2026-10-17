import React, { useState } from 'react';

const tabData = {
  innovation: {
    title: 'How VR is Transforming\nOur Digital World',
    desc: "Virtual Reality (VR) is no longer a concept of the future—it's a reality reshaping how we interact, work, and entertain ourselves.",
    image: 'Forth.png',
    date: '08 February 2025',
    author: 'Henry Leonardo',
  },
  technology: {
    title: 'Next-Gen Hardware &\nSpatial Computing',
    desc: 'Advanced optical sensors, haptic feedback systems, and ultra-high-resolution displays are breaking the boundaries of digital immersion.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1000',
    date: '14 March 2025',
    author: 'Sarah Chen',
  },
  experience: {
    title: 'Redefining Human\nInteraction in VR',
    desc: 'From shared virtual workspaces to deep emotive AI avatars, spatial social presence allows seamless collaboration across the globe.',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=1000',
    date: '22 April 2025',
    author: 'Alex Vance',
  },
};

const Limitless = () => {
  const [activeTab, setActiveTab] = useState('innovation');

  const currentContent = tabData[activeTab];

  return (
    <section className="limitless-container">
      {/* Top Heading */}
      <h2 className="limitless-title">
        LIMITLESS POSSIBILITIES <br />
        WITH NEOVISION
      </h2>

      {/* Main Content Layout */}
      <div className="limitless-content">
        {/* Left Side Links */}
        <div className="limitless-left">
          <button
            className={`limitless-link ${activeTab === 'innovation' ? 'active' : ''}`}
            onClick={() => setActiveTab('innovation')}
          >
            Innovation
          </button>
          <button
            className={`limitless-link ${activeTab === 'technology' ? 'active' : ''}`}
            onClick={() => setActiveTab('technology')}
          >
            Technology
          </button>
          <button
            className={`limitless-link ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
        </div>

        {/* Center Image */}
        <div className="limitless-center">
          <img
            src={currentContent.image}
            alt={activeTab}
            className="limitless-image"
          />
        </div>

        {/* Right Side Info */}
        <div className="limitless-right">
          <h3 className="limitless-card-title">
            {currentContent.title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h3>

          <p className="limitless-card-desc">{currentContent.desc}</p>

          <a href="#learn-more" className="limitless-btn">Learn More</a>

          <div className="limitless-footer-info">
            <span className="limitless-date">{currentContent.date}</span>
            <span className="limitless-author">{currentContent.author}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limitless;