import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('hero');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} />
      {currentPage === 'hero' && <Hero />}
      {currentPage === 'dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
