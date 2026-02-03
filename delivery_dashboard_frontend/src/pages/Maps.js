import React, { useState } from 'react';
import '../styles/pages.css';

// PUBLIC_INTERFACE
/**
 * Maps page component
 * Provides quick access to navigation for current deliveries
 * Integrates with Google Maps or other mapping services
 */
function Maps() {
  const [activeDelivery, setActiveDelivery] = useState(null);

  // Mock current deliveries for map navigation
  const currentDeliveries = [
    {
      id: 1,
      orderId: 'ORD-2024-001',
      customerName: 'John Smith',
      address: '123 Main St, Apt 4B, New York, NY 10001',
      coordinates: { lat: 40.7128, lng: -74.0060 },
      status: 'In Transit'
    },
    {
      id: 4,
      orderId: 'ORD-2024-004',
      customerName: 'Emily Davis',
      address: '321 Pine Road, Manhattan, NY 10002',
      coordinates: { lat: 40.7148, lng: -74.0070 },
      status: 'Ready for Delivery'
    }
  ];

  // PUBLIC_INTERFACE
  /**
   * Open navigation in external map application
   * @param {Object} delivery - Delivery object with address
   */
  const openInMaps = (delivery) => {
    const address = encodeURIComponent(delivery.address);
    // Try Google Maps first, fallback to Apple Maps
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile: try native apps
      window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    } else {
      // Desktop: open in new tab
      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Navigation</h1>
        <p className="page-subtitle">Quick access to delivery locations</p>
      </div>

      <div className="map-placeholder">
        <svg className="map-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        <p className="map-placeholder-text">Map View</p>
        <p className="map-placeholder-subtext">Interactive map coming soon</p>
      </div>

      <div className="map-delivery-list">
        <h2 className="section-title">Active Deliveries</h2>
        
        {currentDeliveries.length === 0 ? (
          <div className="empty-state">
            <p>No active deliveries at the moment</p>
          </div>
        ) : (
          <div className="deliveries-list">
            {currentDeliveries.map((delivery) => (
              <div 
                key={delivery.id} 
                className={`delivery-card ${activeDelivery === delivery.id ? 'active' : ''}`}
                onClick={() => setActiveDelivery(delivery.id)}
              >
                <div className="delivery-header">
                  <div className="delivery-order-id">
                    <span className="label">Order:</span>
                    <span className="value">{delivery.orderId}</span>
                  </div>
                  <span className="status-badge status-transit">{delivery.status}</span>
                </div>

                <div className="delivery-customer">
                  <h3 className="customer-name">{delivery.customerName}</h3>
                </div>

                <div className="delivery-address">
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{delivery.address}</span>
                </div>

                <div className="map-actions">
                  <button 
                    className="action-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openInMaps(delivery);
                    }}
                  >
                    <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Navigate
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Maps;
