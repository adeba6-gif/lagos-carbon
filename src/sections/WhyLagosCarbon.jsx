export const WhyLagosCarbon = () => {
  const whyCards = [
    {
      icon: 'M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V11h6v10',
      title: 'Government-aligned',
      description:
        'Developed in collaboration with Lagos State institutions under the Lagos Standard, providing regulatory backing that compliance buyers require.',
    },
    {
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      title: 'High-integrity credits',
      description:
        'Robust MRV (Monitoring, Reporting, Verification) and data assurance at every stage of credit generation.',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
      title: 'Market access',
      description:
        'Pathways to both voluntary and compliance-aligned markets, with connections to international corporate and institutional buyers.',
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Developer-first economics',
      description:
        'Designed to improve project economics through additional revenue streams, improving bankability and access to global capital.',
    },
  ];

  return (
    <section style={{ background: 'var(--bg)' }}>
      <div className="container">
        <div className="section-label">Why Lagos Carbon</div>
        <h2 className="section-title">Built for trust. Designed for scale.</h2>
        <div className="why-grid">
          {whyCards.map((card, index) => (
            <div key={index} className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d={card.icon} />
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
