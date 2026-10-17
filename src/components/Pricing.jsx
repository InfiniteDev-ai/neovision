import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="pricing-container" id="pricing">
      {/* Header Section */}
      <div className="pricing-header">
        <span className="pricing-subheading">INVESTMENT TIERS</span>
        <h2 className="pricing-title">
          CHOOSE YOUR <br />
          DIGITAL REALM
        </h2>

        {/* Billing Toggle Switch */}
        <div className="pricing-toggle-group">
          <button
            className={`pricing-toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`pricing-toggle-btn ${billingCycle === 'annual' ? 'active' : ''}`}
            onClick={() => setBillingCycle('annual')}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="pricing-grid">
        {/* Tier 1: Neural Access */}
        <div className="pricing-card">
          <div className="pricing-card-header">
            <span className="pricing-tier-tag">01 / STARTER</span>
            <h3 className="pricing-card-title">Neural Access</h3>
            <p className="pricing-card-desc">
              Essential VR simulation tools and standard virtual environments for beginners.
            </p>
          </div>

          <div className="pricing-price-box">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">{billingCycle === 'monthly' ? '29' : '24'}</span>
            <span className="pricing-period">/mo</span>
          </div>

          <ul className="pricing-features-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Standard VR Environments
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Basic AI Avatars
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              720p Resolution Stream
            </li>
            <li className="disabled">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              Custom Metaverse Space
            </li>
          </ul>

          <button className="pricing-btn">Get Started</button>
        </div>

        {/* Tier 2: Quantum Reality (Most Popular) */}
        <div className="pricing-card featured">
          <div className="pricing-badge-popular">MOST POPULAR</div>
          <div className="pricing-card-header">
            <span className="pricing-tier-tag">02 / PRO</span>
            <h3 className="pricing-card-title">Quantum Reality</h3>
            <p className="pricing-card-desc">
              Advanced spatial computing, hyper-realistic rendering, and active AI integration.
            </p>
          </div>

          <div className="pricing-price-box">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">{billingCycle === 'monthly' ? '79' : '63'}</span>
            <span className="pricing-period">/mo</span>
          </div>

          <ul className="pricing-features-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Hyper-Realistic Environments
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Advanced AI-Driven Avatars
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              4K Ultra HD Spatial Stream
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              1 Custom Metaverse Room
            </li>
          </ul>

          <button className="pricing-btn-primary">Deploy Quantum</button>
        </div>

        {/* Tier 3: Matrix Infinite */}
        <div className="pricing-card">
          <div className="pricing-card-header">
            <span className="pricing-tier-tag">03 / ENTERPRISE</span>
            <h3 className="pricing-card-title">Matrix Infinite</h3>
            <p className="pricing-card-desc">
              Full-scale persistent metaverse infrastructure for global enterprises and creators.
            </p>
          </div>

          <div className="pricing-price-box">
            <span className="pricing-currency">$</span>
            <span className="pricing-amount">{billingCycle === 'monthly' ? '199' : '159'}</span>
            <span className="pricing-period">/mo</span>
          </div>

          <ul className="pricing-features-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Unlimited Infinite Worlds
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Custom Emotive AI Avatars
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              8K Ray-Traced Immersion
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Dedicated Neural Support
            </li>
          </ul>

          <button className="pricing-btn">Contact Matrix</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;