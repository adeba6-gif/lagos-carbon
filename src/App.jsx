import { useContext } from 'react';
import { PageContext } from './context/PageContext';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DevelopersPage } from './pages/DevelopersPage';
import { FAQsPage } from './pages/FAQsPage';
import { ContactPage } from './pages/ContactPage';
import './styles/theme.css';

function App() {
  const { currentPage } = useContext(PageContext);

  return (
    <>
      <Navigation />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'developers' && <DevelopersPage />}
      {currentPage === 'faqs' && <FAQsPage />}
      {currentPage === 'contact' && <ContactPage />}
    </>
  );
}

export default App;
