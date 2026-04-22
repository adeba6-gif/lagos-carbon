import { useContext, useState } from 'react';
import { PageContext } from '../context/PageContext';

export const Navigation = () => {
  const { showPage } = useContext(PageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (page) => {
    showPage(page);
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-inner">
        <a
          className="nav-logo"
          onClick={() => handleNavClick('home')}
        >
          Lagos<span>Carbon</span>
        </a>
        <button
          className="nav-toggle"
          onClick={toggleNav}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <a onClick={() => handleNavClick('home')}>Home</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('about')}>About</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('developers')}>For Developers</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('faqs')}>FAQs</a>
          </li>
          <li>
            <a onClick={() => handleNavClick('contact')}>Contact</a>
          </li>
          <li>
            <a className="nav-cta" onClick={() => handleNavClick('contact')}>
              Submit a Project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
