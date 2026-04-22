import { useState } from 'react';
import { Footer } from '../components/Footer';

export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Submit Your Project</h1>
          <p>Provide a few details and our team will assess your project's eligibility within 48 hours.</p>
        </div>
      </div>

      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="form-grid">
            {/* FORM */}
            <div>
              <form id="projectForm" onSubmit={handleSubmit}>
                <div className="form-section-title">Section 1 — Contact Details</div>
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="field">
                  <label>Company / Organisation</label>
                  <input type="text" placeholder="Company name" />
                </div>
                <div className="field">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@company.com" required />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+234 ..." />
                </div>

                <div className="form-section-title">Section 2 — Project Details</div>
                <div className="field">
                  <label>Project Location</label>
                  <input type="text" placeholder="City, Country" />
                </div>
                <div className="field">
                  <label>Project Type</label>
                  <select>
                    <option value="">Select a project type</option>
                    <option>Solar / Renewable Energy</option>
                    <option>Energy Efficiency</option>
                    <option>Waste / Water / Recycling</option>
                    <option>Electric Vehicle Programme</option>
                    <option>Natural Capital / Biodiversity</option>
                    <option>Air Pollution</option>
                    <option>CBAM Compliant Initiative</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label>Installed Capacity (kW or MW)</label>
                  <input type="text" placeholder="e.g. 500 kW or 2 MW" />
                </div>
                <div className="field">
                  <label>Project Status</label>
                  <select>
                    <option value="">Select status</option>
                    <option>Operational</option>
                    <option>Under Construction</option>
                    <option>Planned / Development</option>
                  </select>
                </div>

                <div className="form-section-title">Section 3 — Description</div>
                <div className="field">
                  <label>Brief Project Description</label>
                  <textarea placeholder="Tell us a bit about your project — what it does, where it's located, and any relevant context..."></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Project →
                </button>
                <div className={`confirmation ${formSubmitted ? 'show' : ''}`}>
                  Thank you — our team will review your submission and respond within 48 hours.
                </div>
              </form>
            </div>

            {/* CONTACT DETAILS */}
            <div className="contact-details">
              <div className="section-label">Contact</div>
              <h2 className="section-title">Get in touch</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Whether you have a project to submit or just want to learn more, our team is happy to help.
              </p>

              <div className="contact-item">
                <label>Email</label>
                <a href="mailto:info@lagoscarbon.com">info@lagoscarbon.com</a>
              </div>
              <div className="contact-item">
                <label>Response Time</label>
                <span>Within 48 hours</span>
              </div>
              <div className="contact-item">
                <label>Based in</label>
                <span>Lagos, Nigeria</span>
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'var(--green-light)',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                }}
              >
                <p style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.5rem', color: 'var(--green)' }}>
                  Not ready to submit?
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                  Download one of our sample project reports to understand what the process looks like and what
                  economics to expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
