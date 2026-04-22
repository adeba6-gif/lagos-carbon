import { useContext } from 'react';
import { PageContext } from '../context/PageContext';

export const Footer = () => {
  const { showPage } = useContext(PageContext);

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <span className="footer-logo" onClick={() => showPage('home')}>
              Lagos Carbon
            </span>
            <p className="footer-desc">
              Africa's first government-organised environmental market — transforming Lagos State's climate
              challenge into investable opportunity.
            </p>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul className="footer-links">
              <li>
                <a onClick={() => showPage('about')}>About</a>
              </li>
              <li>
                <a onClick={() => showPage('developers')}>For Developers</a>
              </li>
              <li>
                <a onClick={() => showPage('faqs')}>FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@lagoscarbon.com">info@lagoscarbon.com</a>
              </li>
              <li>
                <a onClick={() => showPage('contact')}>Submit a Project</a>
              </li>
              <li>
                <a onClick={() => showPage('contact')}>Speak to the Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Lagos Carbon. All rights reserved.</p>
          <p className="footer-disclaimer">
            This website is for informational purposes only and does not constitute financial advice, a
            prospectus, or an offer to sell securities. Environmental credits involve risk. Past performance is not
            indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};
