import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Reality Development',
    description: 'Step into the future with our custom VR development services, designed to create immersive digital experiences.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="4"></rect>
        <path d="M6 12h.01M18 12h.01"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Digital Assistants',
    description: 'Enhance customer engagement and operational efficiency with our AI-driven virtual assistants. These intelligent avatars.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Gaming Solutions',
    description: 'Revolutionize the gaming industry with our next-generation VR game development services.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="3"></rect>
        <path d="M6 12h4m-2-2v4m10-2h.01m-2-2h.01"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Metaverse Spaces',
    description: 'Build virtual real estate and interactive persistent worlds engineered for social connectivity and business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    ),
  },
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Handle looping navigation
  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1));
  };

  // Get 3 visible items with infinite loop wrapping
  const visibleServices = [
    servicesData[startIndex],
    servicesData[(startIndex + 1) % servicesData.length],
    servicesData[(startIndex + 2) % servicesData.length],
  ];

  return (
    <section className="services-container">
      {/* Header with Navigation Controls */}
      <div className="services-header">
        <h2 className="services-title">OUR SERVICE</h2>
        <div className="services-nav-buttons">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous service">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="nav-btn" onClick={handleNext} aria-label="Next service">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Grid / Slider */}
      <div className="services-grid">
        {visibleServices.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon-wrapper">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
            <a href="#learn-more" className="service-card-link">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;