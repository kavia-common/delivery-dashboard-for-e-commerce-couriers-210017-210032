import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Deliveries from './pages/Deliveries';
import Earnings from './pages/Earnings';
import Maps from './pages/Maps';
import Notifications from './pages/Notifications';
import Support from './pages/Support';
import './App.css';

// PUBLIC_INTERFACE
/**
 * Main App component
 * Handles tab routing between Deliveries and Earnings pages
 * Provides navigation and page rendering with theme support
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
    <ThemeProvider>
      <div className="App">
        <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
        
        <main className="app-main">
          {activeTab === 'deliveries' && <Deliveries />}
          {activeTab === 'earnings' && <Earnings />}
          {activeTab === 'maps' && <Maps />}
          {activeTab === 'notifications' && <Notifications />}
          {activeTab === 'support' && <Support />}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
