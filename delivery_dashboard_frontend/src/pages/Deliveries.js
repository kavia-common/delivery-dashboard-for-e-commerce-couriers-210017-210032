import React, { useState, useEffect } from 'react';
import '../styles/pages.css';

// PUBLIC_INTERFACE
/**
 * Deliveries page component
 * Displays a list of current deliveries for the courier
 * Shows delivery status, customer info, and delivery address
 */
function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call with mock data
    // In production, this would fetch from REACT_APP_API_BASE or REACT_APP_BACKEND_URL
    const fetchDeliveries = async () => {
      try {
        setLoading(true);
        // Mock data for demonstration
        const mockDeliveries = [
          {
            id: 1,
            orderId: 'ORD-2024-001',
            customerName: 'John Smith',
            address: '123 Main St, Apt 4B, New York, NY 10001',
            phone: '(555) 123-4567',
            items: 'Samsung TV 55", HDMI Cable',
            status: 'In Transit',
            estimatedTime: '2:30 PM',
            priority: 'high'
          },
          {
            id: 2,
            orderId: 'ORD-2024-002',
            customerName: 'Sarah Johnson',
            address: '456 Oak Avenue, Brooklyn, NY 11201',
            phone: '(555) 234-5678',
            items: 'Sony Headphones, Phone Charger',
            status: 'Pending Pickup',
            estimatedTime: '3:00 PM',
            priority: 'normal'
          },
          {
            id: 3,
            orderId: 'ORD-2024-003',
            customerName: 'Michael Brown',
            address: '789 Elm Street, Queens, NY 11375',
            phone: '(555) 345-6789',
            items: 'Dell Laptop, Mouse, Keyboard',
            status: 'In Transit',
            estimatedTime: '4:15 PM',
            priority: 'normal'
          },
          {
            id: 4,
            orderId: 'ORD-2024-004',
            customerName: 'Emily Davis',
            address: '321 Pine Road, Manhattan, NY 10002',
            phone: '(555) 456-7890',
            items: 'Apple iPad Pro, Apple Pencil',
            status: 'Ready for Delivery',
            estimatedTime: '5:00 PM',
            priority: 'high'
          }
        ];
        
        // Simulate network delay
        setTimeout(() => {
          setDeliveries(mockDeliveries);
          setLoading(false);
        }, 500);
      } catch (err) {
        setError('Failed to load deliveries');
        setLoading(false);
      }
    };

    fetchDeliveries();
  }, []);

  // PUBLIC_INTERFACE
  /**
   * Get status badge class based on delivery status
   * @param {string} status - Current delivery status
   * @returns {string} CSS class name
   */
  const getStatusClass = (status) => {
    switch (status) {
      case 'In Transit':
        return 'status-badge status-transit';
      case 'Pending Pickup':
        return 'status-badge status-pending';
      case 'Ready for Delivery':
        return 'status-badge status-ready';
      case 'Delivered':
        return 'status-badge status-delivered';
      default:
        return 'status-badge';
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading-spinner">Loading deliveries...</div>
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
        <h1 className="page-title">Current Deliveries</h1>
        <p className="page-subtitle">
          {deliveries.length} {deliveries.length === 1 ? 'delivery' : 'deliveries'} pending
        </p>
      </div>

      <div className="deliveries-list">
        {deliveries.map((delivery) => (
          <div 
            key={delivery.id} 
            className={`delivery-card ${delivery.priority === 'high' ? 'priority-high' : ''}`}
          >
            <div className="delivery-header">
              <div className="delivery-order-id">
                <span className="label">Order:</span>
                <span className="value">{delivery.orderId}</span>
              </div>
              <span className={getStatusClass(delivery.status)}>
                {delivery.status}
              </span>
            </div>

            <div className="delivery-customer">
              <h3 className="customer-name">{delivery.customerName}</h3>
              <a href={`tel:${delivery.phone}`} className="customer-phone">
                {delivery.phone}
              </a>
            </div>

            <div className="delivery-address">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{delivery.address}</span>
            </div>

            <div className="delivery-items">
              <span className="label">Items:</span>
              <span className="items-text">{delivery.items}</span>
            </div>

            <div className="delivery-footer">
              <div className="estimated-time">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
                <span>ETA: {delivery.estimatedTime}</span>
              </div>
              <button className="action-button">
                Mark Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deliveries;
