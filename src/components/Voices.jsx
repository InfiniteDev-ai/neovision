

const testimonialsData = [
  {
    id: 1,
    quote: 'NeoVision completely transformed the way I interact with virtual reality.',
    name: 'James Rizaki',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 2,
    quote: 'Our team has adopted NeoVision\'s VR collaboration tools',
    name: 'Samantha Leonardo',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 3,
    quote: 'I\'ve been gaming in VR for years, but NeoVision\'s technology',
    name: 'Mark Trevor',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
];

const Voices = () => {
  return (
    <section className="voices-container">
      {/* Background Curved Wave Line */}
      <svg className="voices-wave" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
        <path
          d="M0,160 C320,300 720,20 1120,180 C1280,240 1380,190 1440,160"
          stroke="#1a1a1a"
          strokeWidth="3"
        />
      </svg>

      <div className="voices-content">
        {/* Left Column: Heading & Description */}
        <div className="voices-left">
          <h2 className="voices-title">
            VOICES OF THE <br />
            FUTURE
          </h2>

          <div className="voices-desc-box">
            <p className="voices-desc">
              Here, you'll hear firsthand from users, pioneers, and tech enthusiasts who are shaping the next generation of virtual reality and futuristic technology. Explore their stories and discover how we is transforming the way we interact with the digital world.
            </p>
          </div>
        </div>

        {/* Right Column: Testimonial Cards Stack */}
        <div className="voices-right">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-text">
                <p className="testimonial-quote">{item.quote}</p>
                <h4 className="testimonial-name">{item.name}</h4>
              </div>
              <img
                src={item.avatar}
                alt={item.name}
                className="testimonial-avatar"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;