import { createContext, useState, useCallback } from 'react';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');

  const showPage = useCallback((name) => {
    setCurrentPage(name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <PageContext.Provider value={{ currentPage, showPage }}>
      {children}
    </PageContext.Provider>
  );
};
