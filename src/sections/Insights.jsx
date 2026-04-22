import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export const Insights = () => {
  const { showPage } = useContext(PageContext);

  const insights = [
    {
      tag: 'Solar · Kenya',
      title: '411 kWp Solar Project',
      description:
        'Sample output report illustrating I-REC generation, monitoring methodology, and indicative annual revenue for a mid-scale rooftop solar installation.',
    },
    {
      tag: 'Solar · Nigeria',
      title: '1 MWph Solar Project — Polaris Bank',
      description:
        'Case study illustrating credit generation and verification for a commercial captive solar installation under the Lagos Carbon methodology.',
    },
  ];

  return (
    <section style={{ background: 'white' }}>
      <div className="container">
        <div className="section-label">Sample Reports</div>
        <h2 className="section-title">Illustrative project outputs</h2>
        <p className="section-sub">
          The following examples illustrate the type of environmental credit revenue a project can expect to generate
          under the Lagos Carbon framework.
        </p>
        <div className="insight-cards">
          {insights.map((insight, index) => (
            <div key={index} className="insight-card">
              <div className="insight-tag">{insight.tag}</div>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
              <a className="insight-link" onClick={() => showPage('contact')}>
                Download Sample Report
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
