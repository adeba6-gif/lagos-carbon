export const HowItWorks = () => {
  const steps = [
    {
      num: '1',
      title: 'Register Your Project',
      description:
        'Submit your project details. Our team conducts an initial assessment and provides a feasibility estimate within days.',
    },
    {
      num: '2',
      title: 'Monitor & Verify Performance',
      description:
        'Sensor-driven data collection and independent verification ensures credits are traceable and credible.',
    },
    {
      num: '3',
      title: 'Generate & Sell Credits',
      description:
        'Access global buyers — international corporates, institutional investors, and compliance markets.',
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-label">How It Works</div>
        <h2 className="section-title">Three steps to environmental credit revenue</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
