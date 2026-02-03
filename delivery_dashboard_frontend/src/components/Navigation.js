import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/navigation.css';

// PUBLIC_INTERFACE
/**
 * Navigation component
 * Provides tab navigation between Deliveries and Earnings pages
 * Includes theme toggle button
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently active tab ('deliveries' or 'earnings')
 * @param {function} props.onTabChange - Callback when tab is changed
 */
function Navigation({ activeTab, onTabChange }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span className="brand-text">Delivery Dashboard</span>
        </div>

        <div className="nav-actions">
          <div className="nav-tabs">
            <button
              className={`nav-tab ${activeTab === 'deliveries' ? 'active' : ''}`}
              onClick={() => onTabChange('deliveries')}
              aria-label="View deliveries"
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="tab-text">Deliveries</span>
            </button>

            <button
              className={`nav-tab ${activeTab === 'earnings' ? 'active' : ''}`}
              onClick={() => onTabChange('earnings')}
              aria-label="View earnings"
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="tab-text">Earnings</span>
            </button>
          </div>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
