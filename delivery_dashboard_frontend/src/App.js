import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Deliveries from './pages/Deliveries';
import Earnings from './pages/Earnings';
import './App.css';

// PUBLIC_INTERFACE
/**
 * Main App component
 * Handles tab routing between Deliveries and Earnings pages
 * Provides navigation and page rendering
 */
function App() {
  const [activeTab, setActiveTab] = useState('deliveries');

  // PUBLIC_INTERFACE
  /**
   * Handle tab change
   * @param {string} tab - Tab identifier ('deliveries' or 'earnings')
   */
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="app-main">
        {activeTab === 'deliveries' && <Deliveries />}
        {activeTab === 'earnings' && <Earnings />}
      </main>
    </div>
  );
}

export default App;
