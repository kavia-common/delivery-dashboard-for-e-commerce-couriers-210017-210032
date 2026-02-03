import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

// PUBLIC_INTERFACE
/**
 * Earnings page component
 * Displays total earnings and recent earning history for the courier
 * Shows daily breakdown and payment details
 */
function Earnings() {
  const [earnings, setEarnings] = useState({
    total: 0,
    thisWeek: 0,
    thisMonth: 0,
    recent: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  useEffect(() => {
    // Simulate API call with mock data
    // In production, this would fetch from REACT_APP_API_BASE or REACT_APP_BACKEND_URL
    const fetchEarnings = async () => {
      try {
        setLoading(true);
        // Mock data for demonstration
        const mockEarnings = {
          total: 2847.50,
          thisWeek: 425.75,
          thisMonth: 1832.25,
          recent: [
            {
              id: 1,
              date: '2024-01-15',
              orderId: 'ORD-2024-001',
              customerName: 'John Smith',
              amount: 45.50,
              tip: 5.00,
              distance: '3.2 miles',
              time: '2:30 PM'
            },
            {
              id: 2,
              date: '2024-01-15',
              orderId: 'ORD-2024-002',
              customerName: 'Sarah Johnson',
              amount: 32.25,
              tip: 3.50,
              distance: '1.8 miles',
              time: '3:15 PM'
            },
            {
              id: 3,
              date: '2024-01-14',
              orderId: 'ORD-2024-003',
              customerName: 'Michael Brown',
              amount: 67.00,
              tip: 8.00,
              distance: '5.6 miles',
              time: '11:45 AM'
            },
            {
              id: 4,
              date: '2024-01-14',
              orderId: 'ORD-2024-004',
              customerName: 'Emily Davis',
              amount: 51.75,
              tip: 6.25,
              distance: '4.1 miles',
              time: '4:20 PM'
            },
            {
              id: 5,
              date: '2024-01-13',
              orderId: 'ORD-2024-005',
              customerName: 'David Wilson',
              amount: 38.50,
              tip: 4.00,
              distance: '2.5 miles',
              time: '1:00 PM'
            },
            {
              id: 6,
              date: '2024-01-13',
              orderId: 'ORD-2024-006',
              customerName: 'Lisa Anderson',
              amount: 55.25,
              tip: 7.00,
              distance: '4.8 miles',
              time: '5:30 PM'
            },
            {
              id: 7,
              date: '2024-01-12',
              orderId: 'ORD-2024-007',
              customerName: 'Robert Taylor',
              amount: 42.00,
              tip: 5.50,
              distance: '3.0 miles',
              time: '10:15 AM'
            },
            {
              id: 8,
              date: '2024-01-12',
              orderId: 'ORD-2024-008',
              customerName: 'Jennifer Martinez',
              amount: 48.50,
              tip: 6.00,
              distance: '3.7 miles',
              time: '3:45 PM'
            }
          ]
        };
        
        // Simulate network delay
        setTimeout(() => {
          setEarnings(mockEarnings);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('Failed to load earnings');
        setLoading(false);
      }
    };

    fetchEarnings();
  }, []);

  // PUBLIC_INTERFACE
  /**
   * Format currency amount
   * @param {number} amount - Amount to format
   * @returns {string} Formatted currency string
   */
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // PUBLIC_INTERFACE
  /**
   * Format date string
   * @param {string} dateString - ISO date string
   * @returns {string} Formatted date
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-spinner">Loading earnings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Earnings</h1>
        <p className="page-subtitle">Track your delivery income</p>
      </div>

      <div className="earnings-summary">
        <div className="summary-card total-card">
          <div className="summary-label">Total Earnings</div>
          <div className="summary-amount">{formatCurrency(earnings.total)}</div>
        </div>
        
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-label">This Week</div>
            <div className="summary-amount">{formatCurrency(earnings.thisWeek)}</div>
          </div>
          
          <div className="summary-card">
            <div className="summary-label">This Month</div>
            <div className="summary-amount">{formatCurrency(earnings.thisMonth)}</div>
          </div>
        </div>
      </div>

      <div className="period-selector">
        <button 
          className={`period-button ${selectedPeriod === 'week' ? 'active' : ''}`}
          onClick={() => setSelectedPeriod('week')}
        >
          This Week
        </button>
        <button 
          className={`period-button ${selectedPeriod === 'month' ? 'active' : ''}`}
          onClick={() => setSelectedPeriod('month')}
        >
          This Month
        </button>
        <button 
          className={`period-button ${selectedPeriod === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedPeriod('all')}
        >
          All Time
        </button>
      </div>

      <div className="earnings-history">
        <h2 className="section-title">Recent Deliveries</h2>
        
        <div className="earnings-list">
          {earnings.recent.map((earning) => (
            <div key={earning.id} className="earning-card">
              <div className="earning-header">
                <div className="earning-date-order">
                  <span className="earning-date">{formatDate(earning.date)}</span>
                  <span className="earning-time">{earning.time}</span>
                </div>
                <div className="earning-total">
                  {formatCurrency(earning.amount + earning.tip)}
                </div>
              </div>

              <div className="earning-details">
                <div className="earning-customer">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{earning.customerName}</span>
                </div>
                
                <div className="earning-distance">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{earning.distance}</span>
                </div>
              </div>

              <div className="earning-breakdown">
                <div className="breakdown-item">
                  <span className="breakdown-label">Base:</span>
                  <span className="breakdown-value">{formatCurrency(earning.amount)}</span>
                </div>
                <div className="breakdown-item tip">
                  <span className="breakdown-label">Tip:</span>
                  <span className="breakdown-value">{formatCurrency(earning.tip)}</span>
                </div>
              </div>

              <div className="earning-order-id">Order: {earning.orderId}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Earnings;
