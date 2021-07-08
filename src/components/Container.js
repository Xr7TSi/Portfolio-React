import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Work from './pages/Work';
import WorkMobile from './pages/WorkMobile';
import Contact from './pages/Contact';
import Tech from './pages/Tech';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Work' && window.innerWidth <= 760) {
      return <WorkMobile />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Tech') {
      return <Tech />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}










