import React from 'react';
import '../styles/navigation.css';

// PUBLIC_INTERFACE
/**
 * Navigation component
 * Provides tab navigation between Deliveries and Earnings pages
 * @param {Object} props - Component props
 * @param {string} props.activeTab - Currently active tab ('deliveries' or 'earnings')
 * @param {function} props.onTabChange - Callback when tab is changed
 */
function Navigation({ activeTab, onTabChange }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span className="brand-text">Delivery Dashboard</span>
        </div>

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
      </div>
    </nav>
  );
}

export default Navigation;
