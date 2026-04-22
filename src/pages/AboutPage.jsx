import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { Footer } from '../components/Footer';

export const AboutPage = () => {
  const { showPage } = useContext(PageContext);

  const missionItems = [
    'Onboarding eligible projects',
    'Applying recognised global methodologies',
    'Generating environmental credits (I-RECs and carbon credits)',
    'Enabling access to global buyers',
  ];

  const standardPoints = [
    'Methodology alignment with global standards for renewable energy and emissions reduction',
    'Robust MRV processes ensuring accurate and transparent project performance data',
    'Data integrity through sensor technology, anomaly detection, and independent audit access',
    'Governance and oversight structures supporting compliance, accountability, and market confidence',
  ];

  const whoWorks = [
    {
      title: 'Project Developers',
      description:
        'Solar, wind, waste, and efficiency project developers seeking additional revenue streams and improved bankability.',
    },
    {
      title: 'Government Bodies',
      description:
        'Lagos State institutions including LASEPA and Ibile Holdings, providing regulatory backing and enforcement mandate.',
    },
    {
      title: 'Global Buyers',
      description:
        'International corporates, institutional investors, and compliance buyers seeking high-integrity African environmental credits.',
    },
    {
      title: 'Financial Institutions',
      description:
        'Banks and lenders using environmental credit frameworks to improve project finance structuring and ESG positioning.',
    },
    {
      title: 'Technology Partners',
      description:
        'MRV technology providers and data assurance platforms supporting sensor-driven monitoring and verification.',
    },
    {
      title: 'Standard Bodies',
      description:
        'Gold Standard, Verra, and I-REC alignment ensuring international credibility and buyer acceptance.',
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Lagos Carbon</h1>
          <p>
            Building a credible, scalable environmental market ecosystem that unlocks climate finance for
            infrastructure and energy transition projects.
          </p>
        </div>
      </div>

      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label">Mission</div>
              <h2 className="section-title">What is Lagos Carbon?</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Lagos Carbon is a structured framework for creating and monetising environmental value from real-world
                projects across Lagos State and beyond.
              </p>
              <ul className="focus-list">
                {missionItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-label">The Lagos Standard</div>
              <h2 className="section-title">Building Global Trust</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
                The Lagos Standard is a structured framework governing the generation, monitoring, verification, and
                issuance of environmental credits under the Lagos Carbon platform. It ensures all credits are credible,
                traceable, and aligned with international market expectations.
              </p>
              <ul className="standard-points">
                {standardPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ecosystem-flow">
            <h3>How We Fit in the Ecosystem</h3>
            <div className="flow-nodes">
              <div className="flow-node">Project Developers</div>
              <div className="flow-arrow">→</div>
              <div className="flow-node center">Lagos Carbon</div>
              <div className="flow-arrow">→</div>
              <div className="flow-node">Global Buyers</div>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <div className="section-label">Who We Work With</div>
            <h2 className="section-title">Built for the whole ecosystem</h2>
            <div className="who-grid">
              {whoWorks.map((who, index) => (
                <div key={index} className="who-card">
                  <h3>{who.title}</h3>
                  <p>{who.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="rfp-banner">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Submit your project and our team will be in touch within 48 hours.</p>
          <a className="btn-primary" onClick={() => showPage('contact')}>
            Submit a Project
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};
