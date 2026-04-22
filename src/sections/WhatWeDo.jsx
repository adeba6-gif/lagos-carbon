export const WhatWeDo = () => {
  const focusItems = [
    'Solar and renewable energy projects',
    'Energy efficiency and emissions reduction',
    'Waste, water and recycling projects',
    'Electric Vehicle Incentive Programmes',
    'Natural Capital and biodiversity projects',
    'Air pollution markets',
    'EU Carbon Border Adjustment Mechanism (CBAM) compliant initiatives',
  ];

  const iconBlocks = [
    {
      num: '01',
      title: 'Project Onboarding',
      description:
        'Structured assessment and design support to bring eligible projects into the Lagos Carbon framework.',
    },
    {
      num: '02',
      title: 'Monitoring & Verification',
      description:
        'Sensor-driven MRV 2.0 with data assurance protocols ensuring credit integrity from day one.',
    },
    {
      num: '03',
      title: 'Credit Generation & Market Access',
      description:
        'Pathways to both voluntary and compliance-aligned markets for I-RECs and carbon credits.',
    },
  ];

  return (
    <section style={{ background: 'white' }}>
      <div className="container">
        <div className="what-grid">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">The state's official environmental credit platform</h2>
            <p className="section-sub">
              Lagos Carbon is the State's official market infrastructure, designed to support governments, developers,
              and investors in creating and trading environmental credits with confidence under the Lagos Standard.
            </p>
            <ul className="focus-list">
              {focusItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="icon-blocks">
            {iconBlocks.map((block, index) => (
              <div key={index} className="icon-block">
                <div className="icon-block-num">{block.num}</div>
                <h3>{block.title}</h3>
                <p>{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
