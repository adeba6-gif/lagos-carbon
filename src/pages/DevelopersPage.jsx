import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { Footer } from '../components/Footer';

export const DevelopersPage = () => {
  const { showPage } = useContext(PageContext);

  const benefits = [
    {
      title: 'Generate additional revenue',
      description:
        'Environmental credits provide a new, recurring revenue stream on top of your existing project economics.',
    },
    {
      title: 'Improve project bankability',
      description:
        'Credit revenue improves project IRR and makes financing conversations more straightforward with lenders.',
    },
    {
      title: 'Access to global capital',
      description:
        'Connect with international corporates and institutional investors seeking African environmental credits.',
    },
    {
      title: 'Structured onboarding',
      description:
        'PDD design support and methodology guidance from project submission through to first credit issuance.',
    },
  ];

  const eligibleProjects = [
    'Solar and renewable energy projects',
    'Energy efficiency and emissions reduction',
    'Waste, water and recycling projects',
    'Electric Vehicle Incentive Programmes',
    'Natural Capital and biodiversity projects',
    'Air pollution markets',
    'EU CBAM compliant initiatives',
    'Both existing and planned projects',
  ];

  const onboardingSteps = [
    {
      num: '1',
      title: 'Submit your project',
      description: 'Complete our simple project submission form with basic details about your installation.',
    },
    {
      num: '2',
      title: 'Initial screening',
      description: 'Our team conducts an initial Lagos Carbon assessment, typically completed within a few days.',
    },
    {
      num: '3',
      title: 'Onboarding and PDD design',
      description:
        'We provide Project Design Document (PDD) support and methodology selection guidance.',
    },
    {
      num: '4',
      title: 'Monitoring',
      description: 'Sensor-driven MRV 2.0 is implemented to collect verified generation and performance data.',
    },
    {
      num: '5',
      title: 'Credit issuance',
      description: 'I-RECs or carbon credits are issued upon verification of performance data.',
    },
    {
      num: '6',
      title: 'Sale and trading',
      description:
        'Credits are sold to international buyers, with Lagos Carbon facilitating market access and offtake.',
    },
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>For Project Developers</h1>
          <p>Unlock additional revenue from your projects through environmental credit generation.</p>
        </div>
      </div>

      <section style={{ background: 'white' }}>
        <div className="container">
          <div className="section-label">Benefits</div>
          <h2 className="section-title">Why register your project?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="economics-box">
            <div>
              <div className="econ-label">Example</div>
              <div className="econ-val">1 MW Solar</div>
            </div>
            <div className="econ-arrow">→</div>
            <div>
              <div className="econ-label">Annual I-RECs</div>
              <div className="econ-val">1,621</div>
            </div>
            <div className="econ-arrow">→</div>
            <div>
              <div className="econ-label">Indicative revenue</div>
              <div className="econ-val">~USD 15,000/yr</div>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <div className="section-label">Eligible Projects</div>
            <h2 className="section-title">What types of project qualify?</h2>
            <ul className="checklist">
              {eligibleProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <div className="section-label">Process</div>
            <h2 className="section-title">How onboarding works</h2>
            <div className="flow-steps">
              {onboardingSteps.map((step, index) => (
                <div key={index} className="flow-step">
                  <div className="flow-step-num">{step.num}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a
              className="btn-primary"
              onClick={() => showPage('contact')}
              style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}
            >
              Submit Your Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
