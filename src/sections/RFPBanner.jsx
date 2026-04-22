import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export const RFPBanner = () => {
  const { showPage } = useContext(PageContext);

  return (
    <div className="rfp-banner">
      <div className="container">
        <h2>Have a project?</h2>
        <p>Submit your details and our team will assess your project's eligibility and potential credit revenue.</p>
        <a className="btn-primary" onClick={() => showPage('contact')}>
          Submit Your Project
        </a>
      </div>
    </div>
  );
};
