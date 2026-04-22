import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export const Hero = () => {
  const { showPage } = useContext(PageContext);

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">Africa's First Government-Organised Environmental Market</div>
        <h1>
          Building Trusted Environmental Markets for Lagos, rewarding climate action with{' '}
          <em>sustainable revenue</em>
        </h1>
        <p>
          Lagos Carbon is a structured platform that enables the generation, verification, and monetisation of
          high-integrity environmental credits from real-world infrastructure.
        </p>
        <div className="hero-btns">
          <a className="btn-primary" onClick={() => showPage('contact')}>
            Submit a Project
          </a>
          <a className="btn-secondary" onClick={() => showPage('contact')}>
            Speak to the Team
          </a>
        </div>
      </div>
    </div>
  );
};
